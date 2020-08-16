import React from "react";
import { Comment, Form, Button, Header, Icon } from "semantic-ui-react";

import human from "./human.png";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Avatar as="a" src={human} />
      <Comment.Content>
        <Comment.Author as="a">방문자</Comment.Author>
        <Comment.Metadata>
          <span>2020년</span>
        </Comment.Metadata>
        <Comment.Text>{detail.content}</Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
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
      commentslist: [],
    };
  }

  render() {
    console.log(this.state.commentslist);
    return (
      <Comment.Group style={{ marginLeft: "300px" }}>
        <Header as="h3" dividing>
          Comments
        </Header>

        {this.state.commentslist.map((comments) => (
          <SingleComment content={comments} />
        ))}

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="댓글은 임춘리에게 힘이 됩니다~"
            onChange={(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() =>
              this.setState((prevState) => {
                return {
                  commentslist: [
                    ...prevState.commentslist,
                    this.state.inputContent,
                  ],
                  inputContent: "",
                };
              })
            }
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
