import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./RightBarStyle";
import logo from "../../../images/Butterfly.svg";
import HashTags from "./TweetsHashTags/HashTags";
import { useEffect, useState } from "react";
import axios from "axios";

const RightSideBar = () => {
  const classes = useStyles();

  const [hashTags, setHashTags] = useState([]);

  useEffect(() => {
    axios("https://twitterapi.liara.run/api/getAllHashTags", {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    }).then((response) => setHashTags(response.data))
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
          {hashTags.map((tweet, index) => (
            <HashTags key={index} data={tweet} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RightSideBar;
