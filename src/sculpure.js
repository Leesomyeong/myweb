import React from "react";

class Sculpture extends React.Component {
  constructor() {
    super();
    this.state = {
        page: 1
    };
  }
  render() {
    return (
      <p> this is sculpure page
      </p>
    )
  }
}

export default Sculpture;
