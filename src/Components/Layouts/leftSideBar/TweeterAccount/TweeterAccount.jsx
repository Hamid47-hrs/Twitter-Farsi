import { Typography, Divider, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyle from "./TweeterAccountStyle";
import pic from "../../../../images/BlankProfile.png";

const TweetMan = ({ data }) => {
  const classes = useStyle();

  const getImage = () => (data.image ? data.image : pic);

  return (
    <div className={classes.buttonContainer}>
      <Link to={`/users/${data.username}`} className={classes.users}>
        <Button className={classes.users}>
          <div className={classes.imageContainer}>
            <img
              className={classes.userImage}
              src={getImage()}
              alt={data.username}
            />
          </div>
          <div>
            <Typography className={classes.userNames}>{data.name}</Typography>
            <Typography
              to={`/users/${data.username}`}
              className={classes.userID}
            >
              {data.username}@
            </Typography>
          </div>
        </Button>
      </Link>
      <Divider />
    </div>
  );
};

export default TweetMan;
