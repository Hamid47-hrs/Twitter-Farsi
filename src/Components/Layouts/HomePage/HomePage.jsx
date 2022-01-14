import { TextField, Divider, Button, Grid } from "@material-ui/core";
import { InsertPhotoRounded, Home } from "@material-ui/icons";
import useStyle from "./HomePStyle";
import pic from "../../../images/BlankProfile.png";
import TweetList from "../MainBar/TweetList";
import Header from "../Header/Header";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  useElementState,
  setTweetText as setTweet,
  useElementDispatch,
} from "../../Context/ElementContext";

const HomeP = () => {
  const classes = useStyle();

  const [posts, setPosts] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [imagePath, setImagePath] = useState("");
  const [style, setStyle] = useState({ display: "none" });

  const { tweetText } = useElementState();
  const tweetDispatch = useElementDispatch();

  const inputFile = useRef();

  const updateTweet = () => {
    fetch("https://twitterapi.liara.run/api/getAllTweet", {
      method: "POST",
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    updateTweet();
  }, []);

  const imageHandler = (event) => {
    if (event.target.files && event.target.files.length > 0)
      setImageFile(event.target.files[0]);

    const render = new FileReader();
    render.onload = (event) => {
      setImagePath(event.target.result);
    };
    render.readAsDataURL(event.target.files[0]);
  };

  const selectImage = () => {
    inputFile.current.click();
  };

  const createNewTweet = () => {
    const formData = new FormData();
    formData.append("text", tweetText);
    if (imageFile) formData.append("image", imageFile);
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    axios
      .post("https://twitterapi.liara.run/api/newTweet", formData, config)
      .then((response) => {
        toast.success("پست شما با موفقیت ارسال شد");
        updateTweet();
        setTweet(tweetDispatch, "");
      })
      .catch((error) => {
        toast.error("ارسال پست ناموفق بود");
      });
  };

  const getImage = () => {
    if (
      localStorage.getItem("image") &&
      localStorage.getItem("image") !== "undefined"
    ) {
      return localStorage.getItem("image");
    } else return pic;
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
            <img
              src={getImage()}
              alt="Profile Pic"
              className={classes.profilePic}
            />
            <TextField
              className={classes.textInput}
              value={tweetText}
              placeholder="توییت خود را وارد کنید ..."
              multiline
              row={3}
              maxRows={4}
              onChange={(event) => setTweet(tweetDispatch, event.target.value)}
            />
          </div>
          <div className={classes.buttons}>
            {imagePath && (
              <div className={classes.pictureContainer}>
                <img
                  src={imagePath}
                  className={classes.userPicture}
                  alt="userPicture"
                  style={style}
                />
              </div>
            )}
            <InsertPhotoRounded
              className={classes.imgIcon}
              onClick={selectImage}
              onMouseEnter={(e) => setStyle({ display: "block" })}
              onMouseLeave={(e) => setStyle({ display: "none" })}
            />
            <input
              type={"file"}
              style={{ display: "none" }}
              ref={inputFile}
              onChange={imageHandler}
            />
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
