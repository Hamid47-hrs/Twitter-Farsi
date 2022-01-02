import { Typography, Divider, Button } from "@material-ui/core";
import { Link} from "react-router-dom";
import useStyle from "./TweeterAccountStyle";

const TweetMan = ({ data }) => {
  const classes = useStyle();
  return (
    <div className={classes.buttonContainer}>
        <Link to={`/users/${data.id}`} className={classes.users}>
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
                {data.userId}@
              </Typography>
            </div>
          </Button>
        </Link>
      <Divider />
    </div>
  );
};

export default TweetMan;
