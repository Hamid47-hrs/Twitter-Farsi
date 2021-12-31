import { Container } from "@material-ui/core";
import useStyles from "./MainBarStyle";

const MainBar = (props) => {
  const classes = useStyles();

  return <Container className={classes.root}>{props.children}</Container>;
};

export default MainBar;
