import React from "react";
import {
  Comment,
  Form,
  Button,
  Header,
  Icon,
  Pagination,
  Segment,
  Grid,
} from "semantic-ui-react";
import moment from "moment";
import _ from "lodash";

import { db } from "./fb.js";

import human from "./images/human.png";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Avatar src={human} />
        <Comment.Author as="a" style={{ color: "DarkBlue", marginLeft: "3px" }}>
          {detail.info.userName}
        </Comment.Author>
        <Comment.Metadata>
          <div>{detail.info.time}</div>
        </Comment.Metadata>
        <Comment.Text>{detail.info.content}</Comment.Text>{" "}
        <Comment.Actions>
          <Comment.Action
            style={{ color: "salmon", marginLeft: "35px" }}
            onClick={() => {
              if (
                detail.info.userName == detail.userName &&
                detail.userName != "stranger"
              ) {
                db.collection("comments")
                  .doc(detail.info.id)
                  .delete()
                  .then((res) =>
                    alert(
                      "삭제가 완료되었습니다! Delete completed! \n 새로고침 해주세요"
                    )
                  );
              } else {
                alert(
                  "본인의 댓글만 삭제할 수 있습니다. \n You can only delete your own comments."
                );
              }
            }}
          >
            delete
          </Comment.Action>
          <Comment.Action
            style={{ color: "ForestGreen", marginLeft: "5px" }}
            onClick={() => {
              if (
                detail.info.userName == detail.userName &&
                detail.userName != "stranger"
              ) {
                detail.selectComment(
                  detail.index,
                  detail.info.content,
                  detail.info.id
                );
              } else {
                alert(
                  "본인의 댓글만 수정할 수 있습니다. \n You can only edit your own comments."
                );
              }
            }}
          >
            edit
          </Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      inputTime: "",
      userName: "",
      inputid: "",
      commentsList: [],
      formLocation: -1,
    };
  }

  selectComment = (num, content, id) => {
    this.setState({ formLocation: num, inputContent: content, inputid: id });
  };

  componentDidMount = () => {
    db.collection("comments")
      .get()
      .then((ss) => {
        let comments = [];
        ss.forEach((doc) => {
          comments.push(Object.assign(doc.data(), { id: doc.id }));
        });
        return comments;
      })
      .then((res) => {
        this.setState({ commentsList: res });
      });
  };

  render() {
    console.log(this.state.commentslist);
    return (
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        {this.state.formLocation == -1 ? (
          <Form reply>
            <Form.TextArea
              value={this.state.inputContent}
              placeholder="댓글을 남겨 작가와 소통하세요! comment and communicate with YimchoonLee!"
              onChange={(e) => this.setState({ inputContent: e.target.value })}
            />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
              onClick={() => {
                if (this.state.inputContent != "") {
                  let newComment = {
                    content: this.state.inputContent,
                    time: moment().format("YYYY-MM-DD HH:mm:ss"),
                    userName: this.props.userName,
                  };
                  db.collection("comments")
                    .add(newComment)
                    .then((res) => {
                      this.setState((prevState) => {
                        return {
                          commentsList: [
                            ...prevState.commentsList,
                            Object.assign(newComment, { id: res.id }),
                          ],
                          inputContent: "",
                        };
                      });
                    });
                } else {
                  alert("빈칸입니다 please fill in the blanks :(");
                }
              }}
            />
          </Form>
        ) : null}

        {_.orderBy(this.state.commentsList, "time", "desc").map(
          (comments, index) => (
            <div style={{ padding: 10 }}>
              <SingleComment
                info={comments}
                userName={this.props.userName}
                selectComment={this.selectComment}
                index={index}
              />
              {this.state.formLocation == index ? (
                <Form reply style={{ pedding: 10 }}>
                  <Form.TextArea
                    value={this.state.inputContent}
                    placeholder="댓글을 남겨 작가와 소통하세요! comment and communicate with YimchoonLee!"
                    onChange={(e) =>
                      this.setState({ inputContent: e.target.value })
                    }
                  />
                  <Button
                    content="Edit"
                    labelPosition="left"
                    icon="edit"
                    secondary
                    onClick={() => {
                      if (this.state.inputContent != "") {
                        this.setState(
                          (prevState) => {
                            let newArr = _.filter(
                              prevState.commentsList,
                              (comments) => this.state.inputid != comments.id
                            );
                            let newComment = {
                              content: this.state.inputContent,
                              time: moment().format(
                                "YYYY-MM-DD HH:mm:ss"
                              ),
                              userName: this.props.userName,
                            };

                            return {
                              commentsList: [
                                ...newArr,
                                newComment,
                              ],
                              inputContent: "",
                              formLocation: -1,
                            };
                          },
                          () =>
                            db
                              .collection("comments")
                              .doc(this.state.inputid)
                              .update(
                                this.state.commentsList[
                                  this.state.commentsList.length - 1
                                ]
                              )
                        );
                      } else {
                        alert("빈칸입니다 please fill in the blanks :(");
                      }
                    }}
                  />
                </Form>
              ) : null}
            </div>
          )
        )}

        <br />
        <Grid centered>
          <Pagination style={{ padding: 15 }} totalPages={5} />
        </Grid>
      </Comment.Group>
    );
  }
}

export default Comments;
