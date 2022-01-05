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
    userId: "Jim Cari",
    name: "جیم کری",
    tweet:
      "بازی #call_of_duty حتما در جشنواره #گرمی امسال برنده بهترین #اسکار امسال جایزه بهترین بازیگر نقش اول #زن را خواهد برد.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture:
      "https://profile.callofduty.com/resources/cod/images/shared-logo.jpg",
    likes: 578,
  },
  {
    key: 2,
    userId: "Jim Cari",
    name: "جیم کری",
    tweet:
      "اینجا #هیچ چیز نیست اگر بود #خبر ت می کنم.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture: "",
    likes: 195,
  },
  {
    key: 3,
    userId: "Jim Cari",
    name: "جیم کری",
    tweet:
      "#گوربه های #کهکشانی خطرات جدید #نسل_بشر.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture:
      "https://www.wallpapertip.com/wmimgs/30-308464_cool-profile-pictures-1080p.jpg",
    likes: 65,
  },
  {
    key: 4,
    userId: "Jim Cari",
    name: "جیم کری",
    tweet:
      "از نمونه #فانوس های #بی_ناموس هستند. #بی_صاحب هم هستند.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture:
      "https://dp.profilepics.in/profile_pictures/flower/flower_profile_pictures_01.jpg",
    likes: 3,
  },
  {
    key: 5,
    userId: "Jim Cari",
    name: "جیم کری",
    tweet:
      "گروه #هکر های #anonimooos در یک حرکت #حیرت_آور آیدی خود را به #anoniBooos تغییر دادند.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture:
      "https://m.economictimes.com/thumb/msid-69381991,width-1200,height-900,resizemode-4,imgsize-594328/hacker-1.jpg",
    likes: 212,
  },
  {
    key: 6,
    userId: "Jim Cari",
    name: "جیم کری",
    tweet:
      "there was #nothing here at the #begining. if it was i would let you #notice",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    picture: "",
    likes: 167,
  },
];

const HomeP = (props) => {
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
            title={props.match.params.user}
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
