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
