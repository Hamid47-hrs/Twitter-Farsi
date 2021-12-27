import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Home, InsertPhotoRounded } from "@material-ui/icons";
import useStyles from "./MainBarStyle";
import pic from "../../../images/Hamid.jpg";
import TweetList from "./TweetList";

const data = [
  {
    key: 1,
    id: "hamid_Reza",
    name: "حمید رضا",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
    picture:
      "https://profile.callofduty.com/resources/cod/images/shared-logo.jpg",
    likes: 578,
  },
  {
    key: 2,
    id: "Mr_Nigma",
    name: "Nigma_Riddler",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image:
      "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg",
    picture: "",
    likes: 195,
  },
  {
    key: 3,
    id: "Ali_Ahmadi",
    name: "علی احمدی",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg",
    picture:
      "https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg",
    likes: 65,
  },
  {
    key: 4,
    id: "mamad_RK",
    name: "محمد رک",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image:
      "http://gokubi.com/wp-content/uploads/2013/10/Steve-Andersen-Headshot-square1.jpeg",
    picture:
      "https://dp.profilepics.in/profile_pictures/flower/flower_profile_pictures_01.jpg",
    likes: 3,
  },
  {
    key: 5,
    id: "Hesammmm_2",
    name: "حسام_کوک",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image:
      "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Discord.jpg",
    picture:
      "https://m.economictimes.com/thumb/msid-69381991,width-1200,height-900,resizemode-4,imgsize-594328/hacker-1.jpg",
    likes: 212,
  },
  {
    key: 6,
    id: "unKnown",
    name: "ناشناس",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image: "",
    picture: "",
    likes: 167,
  },
];

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
            <Home className={classes.homeIco} />
            <Typography className={classes.homeTxt}>خانه</Typography>
          </Button>
          <Divider className={classes.divider} />
          <div className={classes.fields}>
            <img src={pic} alt="Profile Pic" className={classes.profilePic} />
            <TextField
              className={classes.textInput}
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
            >
              توییت کن
            </Button>
          </div>
        </Grid>
        <Divider />
        <Grid item className={classes.body}>
          {data.map((tweets) => (
            <TweetList key={tweets.key} data={tweets} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainBar;
