import { Typography, Button, Divider } from "@material-ui/core";
import useStyle from "./TweeterAccountStyle";

const TweetMan = ({ data }) => {
  const classes = useStyle();
  return (
    <div className={classes.buttonContainer}>
      <Button href={data.link} className={classes.users}>
        <div className={classes.imageContainer}>
          <img className={classes.userImage} src={data.img} alt={data.alt} />
        </div>
        <div>
          <Typography className={classes.userNames}>{data.name}</Typography>
          <Typography className={classes.userID}>{data.id}@</Typography>
        </div>
      </Button>
      <Divider />
    </div>
  );
};

export default TweetMan;
