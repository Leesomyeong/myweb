import React from "react";
import { Button } from "semantic-ui-react";

import { db } from "./fb.js";

class Buttons extends React.Component{
  constructor(){
    super()
    this.state = {
      likes : 0
    }
  }
  componentDidMount = () => {

      db.collection("Basic").doc("j2ga231NdxPTxaDSetIV").get().then(res => this.setState({likes : res.data().likes}))
  }

  render(){
    return (        <div>   <Button
                color="red"
                content="Like"
                icon="heart"
                label={{
                  basic: true,
                  color: "red",
                  pointing: "left",
                  content: this.state.likes,
                }}
                onClick = {()=>{this.setState(prevState => {
                return {likes : prevState.likes + 1}
              }, () => db.collection("Basic").doc("j2ga231NdxPTxaDSetIV").update({likes : this.state.likes}))}

                  }
              />
              <Button
                basic
                color="blue"
                content="Visitors"
                icon="eye"
                label={{
                  as: "a",
                  basic: true,
                  color: "blue",
                  pointing: "left",
                  content: this.props.visitors,
                }}
                onClick = {()=> this.props.openModal()}
              /></div>)
  }
}

export default Buttons
