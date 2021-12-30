import { Container } from "@material-ui/core";
import useStyles from "./MainBarStyle";
import HomePage from "../HomePage/HomePage";
import TweetByUser from "../Pages/Users/TweetByUser";

const MainBar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <TweetByUser />
    </Container>
  );
};

export default MainBar;
