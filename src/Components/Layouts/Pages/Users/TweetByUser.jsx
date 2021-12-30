import { Grid } from "@material-ui/core";
import { AccountCircle as Peapole } from "@material-ui/icons";
import useStyle from "./TweetByUserStyel";
import TweetList from "../../MainBar/TweetList";
import Header from "../../Header/Header";

const pic =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU";
const data = [
  {
    key: 1,
    id: "Jim Cari",
    name: "جیم کری",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture:
      "https://profile.callofduty.com/resources/cod/images/shared-logo.jpg",
    likes: 578,
  },
  {
    key: 2,
    id: "Jim Cari",
    name: "جیم کری",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture: "",
    likes: 195,
  },
  {
    key: 3,
    id: "Jim Cari",
    name: "جیم کری",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture:
      "https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg",
    likes: 65,
  },
  {
    key: 4,
    id: "Jim Cari",
    name: "جیم کری",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture:
      "https://dp.profilepics.in/profile_pictures/flower/flower_profile_pictures_01.jpg",
    likes: 3,
  },
  {
    key: 5,
    id: "Jim Cari",
    name: "جیم کری",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture:
      "https://m.economictimes.com/thumb/msid-69381991,width-1200,height-900,resizemode-4,imgsize-594328/hacker-1.jpg",
    likes: 212,
  },
  {
    key: 6,
    id: "Jim Cari",
    name: "جیم کری",
    tweet:
      "این تفاوت ها و شباهت ها همه بی سابقه است. واقعا باید شدید و قاطع بود.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture: "",
    likes: 167,
  },
];

const HomeP = () => {
  const classes = useStyle();

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
            title={"Jim Cari"}
            icon={<Peapole className={classes.homeIco} />}
          />
        </Grid>
        <Grid item className={classes.body}>
          {data.map((tweets) => (
            <TweetList key={tweets.key} data={tweets} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default HomeP;
