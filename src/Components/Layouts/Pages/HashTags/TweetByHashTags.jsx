import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import TweetList from "../../MainBar/TweetList";
import Header from "../../Header/Header";
import Hashtag from "../../../../images/HashTag.png";
import useStyle from "./TweetByHashTagsStyle";
import axios from "axios";

const TweetByHashTags = (props) => {
  const classes = useStyle();

  const [posts, setPosts] = useState([]);

  const location = useLocation();
  const updateTweet = () => {
    axios
      .post(
        "https://twitterapi.liara.run/api/getAllTweet",
        {
          hashTag: props.match.params.hashtag,
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("x-auth-token"),
          },
        }
      )
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    updateTweet();
  }, [location]);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid item>
          <Header
            title={props.match.params.hashtag}
            icon={
              <img src={Hashtag} alt="Hashtag" className={classes.hashIco} />
            }
          />
        </Grid>
        <Grid item className={classes.body}>
          {posts.map((tweets, index) => (
            <TweetList key={index} data={tweets} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default TweetByHashTags;
