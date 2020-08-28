import React from "react";
import {
  Modal, Image, Header, Button
} from "semantic-ui-react";
import 아빠 from "./images/아빠.jpg";


class VisitorsModal extends React.Component {

  render(){
    return(<Modal
      open={this.props.isOpen}
    >
      <Modal.Header>those who have appreciated my work</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={아빠} wrapped />
        <Modal.Description>
          <Header>구글을 통해 접속해주신 분들 accessed through Google</Header>
          {this.props.visitorsList.map(name => <p>{`${name}`}</p>)}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Thank you for visiting"
          labelPosition='right'
          icon='checkmark'
          onClick={() => this.props.closeModal()}
          positive
        />
      </Modal.Actions>
    </Modal>
    )
  }
}

export default VisitorsModal
