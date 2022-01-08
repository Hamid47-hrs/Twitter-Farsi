import { useEffect, useRef, useState } from "react";
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
import pic from "../../../images/BlankProfile.png";
import axios from "axios";
import { toast } from "react-toastify";

const LeftSideBar = () => {
  const classes = useStyles();

  const [user, setUser] = useState([]);
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [imageFile, setImageFile] = useState([]);
  const [imagePath, setImagePath] = useState("");
  const imageInput = useRef();

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

  const getImage = () => {
    if (imagePath && imageFile !== "undefined") return imagePath;
    if (
      localStorage.getItem("image") &&
      localStorage.getItem("image") !== "undefined"
    )
      return localStorage.getItem("image");
    return pic;
  };

  const changeAvatar = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageFile(event.target.files[0]);

      const render = new FileReader();
      render.onload = (event) => {
        setImagePath(event.target.result);
      };
      render.readAsDataURL(event.target.files[0]);
      const formData = new FormData();
      formData.append("image", event.target.files[0]);

      const config = {
        headers: {
          "x-auth-token": localStorage.getItem("x-auth-token"),
        },
      };

      axios
        .post(
          "https://twitterapi.liara.run/api/uploadUserPhoto",
          formData,
          config
        )
        .then((response) => {
          toast.success("تصویر با موفقیت بارگزاری شد");
          localStorage.setItem("image", response.data.imagePath);
        })
        .catch((error) => {
          toast.error("بارگزاری تصویر ناموفق بود");
        });
    }
  };
  return (
    <Container className={classes.root}>
      <SearchBar />
      <Grid container direction="column" justifyContent="flex-start">
        <Grid item className={classes.header} onClick={toggleMenu}>
          <div className={classes.profileImageContainer}>
            <img
              className={classes.profilePicture}
              src={getImage()}
              alt="profile pic"
            />
          </div>
          <div>
            <Typography>{localStorage.getItem("name")}</Typography>
            <Typography className={classes.userName}>
              {localStorage.getItem("username")}@
            </Typography>
          </div>
          <input
            type={"file"}
            style={{ display: "none" }}
            ref={imageInput}
            onChange={changeAvatar}
          />
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
        <MenuItem
          onClick={() => {
            imageInput.current.click();
          }}
        >
          تصویر پروفایل
        </MenuItem>
        <MenuItem>حساب کاربری</MenuItem>
        <MenuItem onClick={handleLogOut}>خروج</MenuItem>
      </Menu>
    </Container>
  );
};

export default LeftSideBar;
