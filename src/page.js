import React, { Component } from "react";

import Projectpage from "./projectpage.js";
import Sculpture from "./sculpure.js";
import Aboutpage from "./aboutpage.js";
import Imagecollection from "./imagecollection.js";
import Mainpage from "./mainpage.js";

class Page extends Component {
  displayPage = (no) => {
    switch (no) {
      case 0:
          return <Projectpage />;
      case 1:
          return <Sculpture />;
      case 2:
          return <Imagecollection />;
      case 3:
          return <Aboutpage />;
      case 5:
          return <Mainpage
            visitors={this.props.visitors}
            toggleModal={this.props.toggleModal}
            userName={this.props.userName}/>;
      default:
          return <Mainpage
            visitors={this.props.visitors}
            toggleModal={this.props.toggleModal}
            userName={this.props.userName}/>;
    }
  };

  render() {
    return <div>{this.displayPage(this.props.page)}
      </div>;
  }
}

export default Page;
