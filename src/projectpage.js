import React from "react";
import {
  Grid,
  Divider,
  Header,
  Icon,
  Image,
  Pagination,
} from "semantic-ui-react";
import _ from "lodash";

import blackhole1 from "./images/blackhole1.jpg";
import sunshine from "./images/sunshine.jpg";
import light from "./images/light.jpg";
import moonhalo from "./images/moonhalo.jpg";
import passion from "./images/passion.jpg";

const imageArr = ["https://firebasestorage.googleapis.com/v0/b/yimchoonlee.appspot.com/o/images%2F1.jpg?alt=media&token=baf41bb6-35e2-4500-b4eb-5e5fcf93a5c2",
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

class Projectpage extends React.Component {
  constructor() {
    super();
    this.state = {
        page: 1,
    };
  }
  render() {
    return (
      <div>
        <br />

        <Grid centered>
            {_.map(
              _.range(this.state.page * 6 - 6, this.state.page * 6 ),
              (i) => (
                <img src={imageArr[i]} height="300"/>
              )
            )}
        </Grid>
        <Grid centered>
          <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={3}
            onPageChange={(e, { activePage }) =>
              this.setState({ page: activePage })
            }
          />
        </Grid>
        <br />
      </div>
    );
  }
}

export default Projectpage;
