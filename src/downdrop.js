import React, { Component } from "react";
import {Dropdown} from "semantic-ui-react";

class Downdrop extends Component {
 menus = [
    {
      text: "Painting",
      id: 1
    },
    {
      text: "Sculpture",
      id: 2
    },
    {
      text: "Image collection",
      id: 3
    },
    {
      text: "ABOUT",
      id: 4
    },
  ];
  renderMenus = (arr) => {
    return arr.map((a,index) => {
      return (
        <Dropdown.Item key={a.id} onClick={()=>this.props.changePage(index)} index={index}> {a.text}</Dropdown.Item>)
    })
  }

  render() {
    return (
      <div>
      <Dropdown text="Menu" pointing className="link item" >
        <Dropdown.Menu >
          {this.renderMenus(this.menus)}
        </Dropdown.Menu>
      </Dropdown>
      </div>
    )
  }
}

export default Downdrop;
