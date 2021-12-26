import { Button, Container, Divider, Grid, TextField, Typography } from "@material-ui/core";
import { Home, InsertPhotoRounded } from "@material-ui/icons";
import useStyles from "./MainBarStyle";
import pic from "../../../images/Hamid.jpg"
const MainBar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid item>
          <Button href="#" className={classes.header}>
            <Home className={classes.homeIco}/>
            <Typography className={classes.homeTxt}>خانه</Typography>
          </Button>
          <Divider className={classes.divider}/>
            <div className={classes.fields}>
                <img src={pic} alt="Profile Pic" className={classes.profilePic}/>
                <TextField 
                className={classes.textInput}
                placeholder="توییت خود را وارد کنید ..."
                multiline
                row={3}
                maxRows={4}/> 
            </div>
            <div className={classes.buttons}>
                <InsertPhotoRounded className={classes.imgIcon}/>
                <Button variant="outlined" color="primary" className={classes.tweetButton}>توییت کن</Button>
            </div>
        </Grid>
        <Grid item className={classes.body}></Grid>
      </Grid>
    </Container>
  );
};

export default MainBar;
