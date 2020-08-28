import React from "react";
import firebase from "firebase";
import {
  Button,
  Image,
  Divider,
  Header,
  Icon,
  Grid,
  Input,
  Menu,
} from "semantic-ui-react";
import _ from "lodash";

import Comments from "./comment.js";
import Buttons from "./buttons.js";
import VisitorsModal from "./modal.js";
import { db, auth } from "./fb.js";

import blackhole1 from "./images/blackhole1.jpg";
import sunshine from "./images/sunshine.jpg";
import light from "./images/light.jpg";
import moonhalo from "./images/moonhalo.jpg";
import passion from "./images/passion.jpg";

var provider = new firebase.auth.GoogleAuthProvider();
const imageArr = [
  blackhole1,
  light,
  sunshine,
  passion,
  moonhalo,
  blackhole1,
  light,
  sunshine,
  passion,
  moonhalo,
  blackhole1,
  light,
  sunshine,
  passion,
  moonhalo,
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "stranger",
      isModalOpen: false,
      visitors: ["Nayeon", "Robert", "Donald"],
      imageNum: 0,
    };
  }
  changeImage = (num, dir) => {
    let newNum = num;
    if (num == 0 && dir == -1) {
      newNum = imageArr.length - 1;
    } else if (num == imageArr.length - 1 && dir == 1) {
      newNum = 0;
    } else {
      newNum = num + dir;
    }
    this.setState({ imageNum: newNum });
  };

  componentDidMount = () => {
    db.collection("Basic")
      .doc("j2ga231NdxPTxaDSetIV")
      .get()
      .then((res) => this.setState({ visitors: res.data().visitors }));
  };

  toggleModal = () =>
    this.setState((prevState) => {
      return { isModalOpen: !prevState.isModalOpen };
    });

  render() {
    return (
      <div>
        <VisitorsModal
          isOpen={this.state.isModalOpen}
          closeModal={this.toggleModal}
          visitorsList={this.state.visitors}
        />
        <div>
          <h1 style={{ textAlign: "center", paddingTop: "20px", color: "red" }}>
            {" "}
            YIMCHOON LEE{" "}
          </h1>
          <Menu widths={3}>
            <Menu.Item>Menu </Menu.Item>
            <Menu.Item>{`Welcome, ${this.state.userName}!`} </Menu.Item>
            <Menu.Item
              onClick={() => {
                firebase
                  .auth()
                  .signInWithPopup(provider)
                  .then(function (result) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    return user.displayName;
                    this.setState({userName : user.displayName});
                    // ...
                  })
                  .then((result) => { this.setState({ userName: result })
                    let duplicate = "";
                    duplicate = _.find(
                      this.stete.visitors,
                      (name) => name == result
                    );
                    if (!duplicate) {
                      db.collection("Basic")
                        .doc("j2ga231NdxPTxaDSetIV")
                        .update({ visitors: [...this.state.visitors, result] })
                        .then((res) =>
                          this.setState((prev) => {
                            return {
                              userName: result,
                              visitors: [...prev.visitors, result],
                            };
                          })
                        );
                    } else {
                      ;
                    }
                  })
                  .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                  });
              }}
            >
              Login{" "}
            </Menu.Item>
          </Menu>
        </div>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="eye" />
            My work
          </Header>
        </Divider>

        <Grid columns={3}>
          <Grid.Column style={{ textAlign: "center" }}>
            <Button
              onClick={() => this.changeImage(this.state.imageNum, -1)}
              circular
              size="massive"
              icon="angle left"
            />
          </Grid.Column>

          <Grid.Column>
            <Image src={imageArr[this.state.imageNum]} size="massive" />
          </Grid.Column>

          <Grid.Column style={{ textAlign: "center" }}>
            <Button
              onClick={() => this.changeImage(this.state.imageNum, +1)}
              circular
              size="massive"
              icon="angle right"
            />
          </Grid.Column>
        </Grid>
        <Grid centered>
          <Grid.Row>
            <Buttons
              openModal={this.toggleModal}
              visitors={this.state.visitors.length}
            />
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <Divider horizontal></Divider>
        <Grid centered columns={3}>
          <Grid.Column>
            <Comments userName={this.state.userName} />
          </Grid.Column>
        </Grid>

        <Divider horizontal>
          <Header as="h4">
            <Icon name="box" />
            other works
          </Header>
        </Divider>
        <br />

        <Grid centered>
          <Image.Group size="medium">
            <Image src={light} /> <Image src={sunshine} />{" "}
            <Image src={passion} /> <Image src={moonhalo} />
          </Image.Group>
        </Grid>

        <Divider horizontal>
          <Header as="h4">
            <Icon name="envelope" />
            contact me
          </Header>
        </Divider>
        <br />
        <div>
          <Grid centered>
            <Button
              circular
              color="facebook"
              icon="facebook"
              onClick={() =>
                window.open("https://www.facebook.com/yimchoon.lee")
              }
            />
            <Button
              circular
              color="youtube"
              icon="youtube"
              style={{ marginLeft: 20 }}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCBtSFvqfnd3wG3cUdcU-5YQ/featured"
                )
              }
            />
            <Button
              circular
              color="instagram"
              icon="instagram"
              style={{ marginLeft: 20 }}
              onClick={() =>
                window.open("https://www.instagram.com/lee_yim_choon/")
              }
            />
          </Grid>
          <br />
          <br />
          <br />
          <Grid centered>
            <p style={{ color: "grey" }}>
              {" "}
              Tel 010 3884 4207 Email lee6367507@naver.com Copyright @ YIMCHOON
              LEE, All Right Reserved.
            </p>
          </Grid>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
