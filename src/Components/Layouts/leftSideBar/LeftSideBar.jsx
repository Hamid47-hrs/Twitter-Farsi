import { useEffect, useState } from "react";
import { Container, Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "./LeftBarStyle";
import TweetMan from "./TweeterAccount/TweeterAccount";
import pic from "../../../images/Hamid.jpg";

const LeftSideBar = () => {
  const classes = useStyles();

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className={classes.root}>
      <Grid container direction="column" justifyContent="flex-start">
        <Grid item className={classes.header}>
          <img className={classes.profilePicture} src={pic} alt="prifile pic" />
          <div>
            <Typography>حمید رضا</Typography>
            <Typography className={classes.userName}>HamidReza@</Typography>
          </div>
        </Grid>
        <Divider />
        <Grid item>
          {user.map((content, index) => (
            <TweetMan key={index} data={content} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LeftSideBar;
