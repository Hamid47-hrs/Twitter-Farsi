import { Fragment } from "react";
import RightSideBar from "./rightSideBar/RightSideBar";
import MainBar from "./MainBar/MainBar";
import LeftSideBar from "./leftSideBar/LeftSideBar";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item sm={3} xs={4}>
          <RightSideBar />
        </Grid>
        <Grid item sm={7} xs={8}>
          <MainBar />
        </Grid>
        <Grid item sm={2}>
          <LeftSideBar />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
