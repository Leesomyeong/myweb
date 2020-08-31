import React from "react";
import { Grid, Image } from "semantic-ui-react";

import blackhole1 from "./slideimages/blackhole1.jpg";
import insearchoflight from "./slideimages/insearchoflight.jpg";
import solar from "./slideimages/solar.jpg";
import perform from "./slideimages/perform.jpg";

const imageArr = [blackhole1, insearchoflight, solar, perform];
const timeInterval = 3500;

class SlideShow extends React.Component {
  constructor() {
    super();
    this.state = { imgIndex: 0 };
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
    this.setState({ imgIndex: newNum });
  };
setTimer(){
  let timer = setInterval(
    () => this.changeImage(this.state.imgIndex, 1),
    timeInterval
  );
  this.setState({timerId: timer})
}

  componentDidMount() {
   this.setTimer()
  }
  render() {
    return (
      <Grid centered>
        <Image
          src={imageArr[this.state.imgIndex]} fluid="true"
          usemap="#imagemap"
          key={ imageArr.length}
        />{" "}
        <map name="imagemap">
          <area
            shape="rect"
            coords="0,0,200,1200"
            onClick={() =>  {clearInterval(this.state.timerId)
              this.changeImage(this.state.imgIndex, -1)
            this.setTimer()
          }}
          />
          <area
            shape="rect"
            coords="1400,0,1600,1200"
            onClick={() =>  {clearInterval(this.state.timerId)
              this.changeImage(this.state.imgIndex, 1)
            this.setTimer()
          }}
          />
        </map>


      </Grid>
    );
  }
}
export default SlideShow;
