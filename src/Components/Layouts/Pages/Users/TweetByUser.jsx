import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TweetList from "../../MainBar/TweetList";
import Header from "../../Header/Header";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { AccountCircle as Peapole } from "@material-ui/icons";
import NoPosts from "../NoPosts/NoPosts";
import useStyle from "./TweetByUserStyel";

const TweetByUSer = (props) => {
  const classes = useStyle();

  const [posts, setPosts] = useState([]);

  const location = useLocation();
  const updateTweet = () => {
    axios
      .post(
        "https://twitterapi.liara.run/api/getAllTweet",
        {
          hashTag: props.match.params.user,
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
            title={props.match.params.user}
            icon={<Peapole className={classes.homeIco} />}
          />
        </Grid>
        <Grid item className={classes.body}>
          {posts.length > 0 ? (
            posts.map((tweets, index) => (
              <TweetList key={index} data={tweets} />
            ))
          ) : (
            <NoPosts />
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default TweetByUSer;
