import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./RightBarStyle";
import logo from "../../../images/Butterfly.svg";
import TweetsByHashTags from "./TweetsHashTags/TweetsByHashTags";
import { useEffect, useState } from "react";

const RightSideBar = () => {
  const classes = useStyles();

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/hashTags")
      .then((response) => response.json())
      .then((data) => setTweets(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className={classes.root}>
      <div className={classes.header}>
        <img src={logo} alt="logo" className={classes.logo} />
        <Link to="/">
          <Typography className={classes.title1} variant="h5" component="h1">
            توییتر فارسی
          </Typography>
          <Typography className={classes.title2} variant="h5" component="h1">
            توییتر
          </Typography>
        </Link>
      </div>
      <div>
        <Typography className={classes.hashtag}>داغ ترین هشتگ ها</Typography>
        <div>
          {tweets.map((tweet, index) => (
            <TweetsByHashTags key={index} data={tweet} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RightSideBar;
