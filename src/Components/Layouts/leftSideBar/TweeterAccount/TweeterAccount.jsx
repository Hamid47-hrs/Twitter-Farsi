import { Typography, Divider, Button } from "@material-ui/core";
import { BrowserRouter as Router, Link} from "react-router-dom";
import useStyle from "./TweeterAccountStyle";

const TweetMan = ({ data }) => {
  const classes = useStyle();
  return (
    <div className={classes.buttonContainer}>
        <Link to={data.link} className={classes.users}>
          <Button className={classes.users}>
            <div className={classes.imageContainer}>
              <img
                className={classes.userImage}
                src={data.img}
                alt={data.alt}
              />
            </div>
            <div>
              <Typography className={classes.userNames}>{data.name}</Typography>
              <Typography to={data.link} className={classes.userID}>
                {data.id}@
              </Typography>
            </div>
          </Button>
        </Link>
      <Divider />
    </div>
  );
};

export default TweetMan;
