import { useEffect, useState } from "react";
import {
  Container,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import useStyles from "./LeftBarStyle";
import TweetMan from "./TweeterAccount/TweeterAccount";
import SearchBar from "./Search/SreachBar";
import pic from "../../../images/Hamid.jpg";

const LeftSideBar = () => {
  const classes = useStyles();

  const [user, setUser] = useState([]);
  const [anchorMenu, setAnchorMenu] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  const toggleMenu = (event) => {
    if (anchorMenu) setAnchorMenu(null);
    else setAnchorMenu(event.currentTarget);
  };
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Container className={classes.root}>
      <SearchBar />
      <Grid container direction="column" justifyContent="flex-start">
        <Grid item className={classes.header} onClick={toggleMenu}>
          <img className={classes.profilePicture} src={pic} alt="prifile pic" />
          <div>
            <Typography>{localStorage.getItem("name")}</Typography>
            <Typography className={classes.userName}>
              {localStorage.getItem("username")}@
            </Typography>
          </div>
        </Grid>
        <Divider />
        <Grid item>
          {user.map((content, index) => (
            <TweetMan key={index} data={content} />
          ))}
        </Grid>
      </Grid>
      <Menu
        open={Boolean(anchorMenu)}
        onClose={() => setAnchorMenu(null)}
        anchorEl={anchorMenu}
      >
        <MenuItem>پروفایل</MenuItem>
        <MenuItem>حساب کاربری</MenuItem>
        <MenuItem onClick={handleLogOut}>خروج</MenuItem>
      </Menu>
    </Container>
  );
};

export default LeftSideBar;
