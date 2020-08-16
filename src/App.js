import React from "react";
import { Button, Image, Divider, Header, Icon, Grid } from "semantic-ui-react";

import Comments from "./comment.js";
import Buttons from "./buttons.js"

import blackhole1 from "./blackhole1.jpg";

function App() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Image src={blackhole1} centered />
        </Grid.Row>
        <Grid.Row>
<Buttons/>
        </Grid.Row>
      </Grid>
      <br />
      <br />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="comment alternate"/>
           댓글을 달아주세요!
        </Header>
      </Divider>

      <Comments />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="envelope" />
          contact me
        </Header>
      </Divider>
      <br />
      <div>
        <Grid centered>
          <Button circular color="facebook" icon="facebook" onClick = {()=>window.open("https://www.facebook.com/yimchoon.lee")}/>
          <Button circular color="youtube" icon="youtube" onClick = {()=>window.open("https://www.youtube.com/channel/UCBtSFvqfnd3wG3cUdcU-5YQ/featured")}/>
          <Button circular color="instagram" icon="instagram" onClick = {()=>window.open("https://www.instagram.com/lee_yim_choon/")}/>
        </Grid>
      </div>
    </div>
  );
}

export default App;
