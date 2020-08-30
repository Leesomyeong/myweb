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
  Dropdown,
} from "semantic-ui-react";
import _ from "lodash";
import {Route, NavLimk} from 'react-router-dom';

import Mainpage from "./mainpage.js";
import Projectpage from "./projectpage.js";
import Aboutpage from "./aboutpage.js";
import Imagecollection from "./imagecollection.js";
import VisitorsModal from "./modal.js";
import { db, auth } from "./fb.js";

var provider = new firebase.auth.GoogleAuthProvider();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "stranger",
      isModalOpen: false,
      visitors: ["Nayeon", "Robert", "Donald"],
      imageNum: 0,
      pageCode: 0,
    };
  }

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
  changePage=(code)=> {this.setState({pageCode: code})}

  render() {
    return (
      <div>
        <VisitorsModal
          isOpen={this.state.isModalOpen}
          closeModal={this.toggleModal}
          visitorsList={this.state.visitors}
        />
        <div>
          <h1 style={{ textAlign: "center", paddingTop: "20px", color: "red" }} onClick={()=>{this.changePage(0)}}>
            {" "}
            YIMCHOON LEE{" "}
          </h1>
          <Menu secondary widths={3} fluid>
            <Dropdown text="Menu" pointing className="link item">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Dropdown text="PROJECTS">
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>{this.changePage(1)}}>painting</Dropdown.Item>
                      <Dropdown.Item>sculpture</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item onClick={()=>{this.changePage(3)}}>IMAGE COLLECTION</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={()=>{this.changePage(2)}}>ABOUT</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
                    this.setState({ userName: user.displayName });
                    // ...
                  })
                  .then((result) => {
                    this.setState({ userName: result });
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
        {this.state.pageCode ? (
          <Projectpage/>, <Aboutpage/> ) : (
          <Mainpage
            visitors={this.state.visitors}
            toggleModal={this.toggleModal}
            userName={this.state.userName}
          />
        )}
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
