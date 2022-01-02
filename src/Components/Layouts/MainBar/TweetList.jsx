import { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Favorite, Repeat } from "@material-ui/icons";
import pic from "../../../images/BlankProfile.png";
import useStyles from "./TweetListStyle";
const TweetList = ({ data }) => {
  const classes = useStyles();
  const [count, setCount] = useState(data.likes);

  const replacer = require("react-string-replace");
  const renderHashTag = (text) => {
    const pattern = /#(\S+)/g;
    return replacer(text, pattern, (match, i) => (
      <a
        key={match + i}
        href={`/tag/${match}`}
        style={{ color: "cornflowerblue" }}
      >
        #{match}
      </a>
    ));
  };

  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Grid container>
          <Grid item className={classes.imageContainer}>
            {data.image ? (
              <img
                className={classes.profileImage}
                src={data.image}
                alt="profile pic"
              />
            ) : (
              <img
                className={classes.profileImage}
                src={pic}
                alt="profile pic"
              />
            )}
          </Grid>
          <Grid item className={classes.content}>
            <div className={classes.introduction}>
              <Typography className={classes.userName}>{data.name}</Typography>
              <Typography className={classes.userID}>{data.userId}@</Typography>
            </div>
            <div className={classes.textContainer}>
              <div className={classes.picContainer}>
                {data.picture ? (
                  <img
                    className={classes.userPicture}
                    src={data.picture}
                    alt="userPicture"
                  />
                ) : null}
              </div>
              <Typography className={classes.userText}>
                {renderHashTag(data.tweet)}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.buttonContainer}>
        <Button
          className={classes.likeButton}
          onClick={() => {
            count === data.likes ? setCount(count + 1) : setCount(count);
          }}
        >
          <Typography className={classes.likeCount}>{count}</Typography>
          <Favorite />
        </Button>
        <Button className={classes.tweetButton}>
          <Typography>Retweet</Typography>
          <Repeat />
        </Button>
      </Grid>
    </Grid>
  );
};

export default TweetList;
