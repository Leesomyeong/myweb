import React from "react";
import Styled from "styled-components";
import {Grid, Divider, Header, Icon} from "semantic-ui-react";

import SlideShow from "./slideshow.js"
import Comments from "./comment.js";
import Buttons from "./buttons.js";

const AppContainer = Styled.div`
&,
& * {
  box-sizing: border-box;
}
`;

const SlideContainer = Styled.div`
width: 25%
float: left;
`;

const CommentContainer = Styled.div`
  width: 40%;
  float: center;
`;

class Mainpage extends React.Component{
  render(){
    return(<div>
<br/>
    <SlideContainer><SlideShow/></SlideContainer>

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
            <Grid>
              <Grid.Column>
                <Comments userName={this.props.userName} />
              </Grid.Column>
            </Grid>
            <br />

            </div>)
  }
}

export default Mainpage
