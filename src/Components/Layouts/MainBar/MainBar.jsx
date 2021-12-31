import { Container } from "@material-ui/core";
import useStyles from "./MainBarStyle";
import HomePage from "../HomePage/HomePage";
import TweetByUser from "../Pages/Users/TweetByUser";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const MainBar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Router>
        <Link to="jim_carrey">jim carrey</Link>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/jim_carrey"} component={TweetByUser} />
        </Switch>
      </Router>
    </Container>
  );
};

export default MainBar;
