import React from "react";
import {Grid, Divider, Header, Icon} from "semantic-ui-react";

import SlideShow from "./slideshow.js"
import Comments from "./comment.js";
import Buttons from "./buttons.js";

class Mainpage extends React.Component{
  render(){
    return(<div>
<br/>
      <SlideShow/>

            <Grid centered>
              <Grid.Row>
                <Buttons
                  openModal={this.props.toggleModal}
                  visitors={this.props.visitors.length}
                />
              </Grid.Row>
            </Grid>
            <br />
            <br />
            <Divider horizontal></Divider>
            <Grid centered columns={3}>
              <Grid.Column>
                <Comments userName={this.props.userName} />
              </Grid.Column>
            </Grid>
            <br />

            </div>)
  }
}

export default Mainpage
