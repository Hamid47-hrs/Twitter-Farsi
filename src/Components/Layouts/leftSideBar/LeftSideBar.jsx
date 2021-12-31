import { Container, Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "./LeftBarStyle";
import TweetMan from "./TweeterAccount/TweeterAccount";
import pic from "../../../images/Hamid.jpg";

const data = [
  {
    key: 1,
    id: "hamid_Reza",
    name: "حمید رضا",
    img: "https://i1.sndcdn.com/artworks-OlAdg6obJPZLU8dE-veA0NA-t500x500.jpg",
    alt: "Hamid",
    link: "/hamid_reza",
  },
  {
    key: 2,
    id: "Jim_Cari",
    name: "جیم کری",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU",
    alt: "Jim",
    link: "/jim_carrey",
  },
  {
    key: 3,
    id: "John_Doe",
    name: "جان دو",
    img: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
    alt: "Jim",
    link: "/john_doe",
  },
  {
    key: 4,
    id: "Emma_Watson",
    name: "اما واتسون",
    img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg",
    alt: "Jim",
    link: "/emma_watson",
  },
  {
    key: 5,
    id: "Henry_Cavill",
    name: "هنری کویل",
    img: "https://i.guim.co.uk/img/media/1af905f750e1dc85eb490a3ec20bf76fb3ac51f7/0_486_2518_1509/master/2518.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f50c0895969f6e081f7fb867c675fbb2",
    alt: "Jim",
    link: "/henry_cavill",
  },
];

const LeftSideBar = () => {
  const classes = useStyles();

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
            {data.map((content) => (
                <TweetMan key={content.key} data={content} />
            ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LeftSideBar;
