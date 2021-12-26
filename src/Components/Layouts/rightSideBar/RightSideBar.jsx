import logo from "../../../images/Butterfly.svg";
import Hashtag from "../../../images/HashTag.png";
import {
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "./RightBarStyle";

const RightSideBar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.header}>
        <img src={logo} alt="logo" className={classes.logo} />
        <Typography className={classes.title1} variant="h5" component="h1">
          توییتر فارسی
        </Typography>
        <Typography className={classes.title2} variant="h5" component="h1">
          توییتر
        </Typography>
      </div>
      <div>
        <Typography className={classes.hashtag}>داغ ترین هشتگ ها</Typography>
        <div>
          <Button href="#" className={classes.hashLink}>
            <img
              src={Hashtag}
              alt="HashTag-Logo"
              className={classes.hashLogo}
            />
            <Typography className={classes.TagText}>هشتگ_اول</Typography>
          </Button>
          <Button href="#" className={classes.hashLink}>
            <img
              src={Hashtag}
              alt="HashTag-Logo"
              className={classes.hashLogo}
            />
            <Typography className={classes.TagText}>هشتگ_اول</Typography>
          </Button>
          <Button href="#" className={classes.hashLink}>
            <img
              src={Hashtag}
              alt="HashTag-Logo"
              className={classes.hashLogo}
            />
            <Typography className={classes.TagText}>هشتگ_اول</Typography>
          </Button>
          <Button href="#" className={classes.hashLink}>
            <img
              src={Hashtag}
              alt="HashTag-Logo"
              className={classes.hashLogo}
            />
            <Typography className={classes.TagText}>هشتگ_اول</Typography>
          </Button>
          
        </div>
      </div>
    </Container>
  );
};

export default RightSideBar;
