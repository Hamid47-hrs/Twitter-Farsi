import { TextField, Divider, Button, Grid } from "@material-ui/core";
import { InsertPhotoRounded, Home } from "@material-ui/icons";
import useStyle from "./HomePStyle";
import pic from "../../../images/Hamid.jpg";
import TweetList from "../MainBar/TweetList";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeP = () => {
  const classes = useStyle();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://twitterapi.liara.run/api/getAllTweet", {
      method: "POST",
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  const createNewTweet = () => {
    const tweet = document.querySelector("#tweetInput").value;

    const data = {
      id: Math.floor(Math.random() * 1000),
      userId: "hamid_Reza",
      name: "حمید رضا",
      tweet: tweet,
      image:
        "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
      picture: "",
      likes: 578,
    };
    axios
      .post("http://localhost:4000/homePagePosts", data)
      .then((response) => console.log(`Response: ${response}`))
      .catch((err) => console.log(`Error: ${err}`));
  };
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid item>
          <Header title={"خانه"} icon={<Home className={classes.homeIco} />} />
        </Grid>
        <Grid item className={classes.body}>
          <div className={classes.fields}>
            <img src={pic} alt="Profile Pic" className={classes.profilePic} />
            <TextField
              className={classes.textInput}
              id="tweetInput"
              placeholder="توییت خود را وارد کنید ..."
              multiline
              row={3}
              maxRows={4}
            />
          </div>
          <div className={classes.buttons}>
            <InsertPhotoRounded className={classes.imgIcon} />
            <Button
              variant="outlined"
              color="primary"
              className={classes.tweetButton}
              onClick={createNewTweet}
            >
              توییت کن
            </Button>
          </div>
          <Divider className={classes.divider} />
          {posts.map((tweets, index) => (
            <TweetList key={index} data={tweets} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default HomeP;
