import { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Favorite, Repeat } from "@material-ui/icons";
import pic from "../../../images/BlankProfile.png";
import useStyles from "./TweetListStyle";
import {
  setTweetText,
  useElementDispatch,
} from "../../Context/ElementContext";

const TweetList = ({ data }) => {
  const classes = useStyles();

  const [count, setCount] = useState(data.likes);
  const tweetDispatch = useElementDispatch();

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

  const reTweet = () => {
    setTweetText(tweetDispatch, data.text);
  };
  
  return (
    <Grid container direction={"column"} className={classes.root}>
      <Grid item>
        <Grid container>
          <Grid item className={classes.imageContainer}>
            {data.user.image && data.user.image !== "undefined" ? (
              <img
                className={classes.profileImage}
                src={data.user.image}
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
              <Typography className={classes.userName}>
                {data.user.name}
              </Typography>
              <Typography className={classes.userID}>
                {data.user.id}@
              </Typography>
            </div>
            <div className={classes.textContainer}>
              <div className={classes.picContainer}>
                {data.image && data.image !== "undefined" ? (
                  <img
                    className={classes.userPicture}
                    src={data.image}
                    alt="userPicture"
                  />
                ) : null}
              </div>
              <Typography className={classes.userText}>
                {renderHashTag(data.text)}
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
        <Button className={classes.tweetButton} onClick={reTweet}>
          <Typography>Retweet</Typography>
          <Repeat />
        </Button>
      </Grid>
    </Grid>
  );
};

export default TweetList;
