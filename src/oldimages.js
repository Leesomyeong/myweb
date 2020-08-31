const imageArr = [
  blackhole1,
  light,
  sunshine,
  passion,
  moonhalo,
  blackhole1,
  light,
  sunshine,
  passion,
  moonhalo,
  blackhole1,
  light,
  sunshine,
  passion,
  moonhalo,
];

onClick={()=>{this.changePage(1)}}


34 pageCode: 0,

49 changePage=(code)=> {this.setState({pageCode: code})}


132{this.state.pageCode ? (
  <Projectpage/>, <Aboutpage/> ) : (
  <Mainpage
    visitors={this.state.visitors}
    toggleModal={this.toggleModal}
    userName={this.state.userName}
  />
)}

<Grid columns={3}>
  <Grid.Column style={{ textAlign: "center" }}>
    <Button
      onClick={() => this.changeImage(this.state.imageNum, -1)}
      circular
      size="massive"
      icon="angle left"
    />
  </Grid.Column>

  <Grid.Column>
    <Image src={imageArr[this.state.imageNum]} size="massive" />
  </Grid.Column>

  <Grid.Column style={{ textAlign: "center" }}>
    <Button
      onClick={() => this.changeImage(this.state.imageNum, +1)}
      circular
      size="massive"
      icon="angle right"
    />
  </Grid.Column>
</Grid>
