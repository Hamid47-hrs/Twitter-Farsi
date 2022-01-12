import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  homeIco: {
    fontSize: "2rem",
    marginLeft: theme.spacing(1),
  },
  fields: {
    display: "flex",
    alignItems: "center",
  },
  profilePic: {
    width: "6rem",
    height: "6rem",
    borderRadius: "50%",
    marginLeft: theme.spacing(2),
  },
  textInput: {
    flex: 1,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imgIcon: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    fontSize: "1.7rem",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
  },
  pictureContainer: {
    position: "relative",
  },
  userPicture: {
    position: "absolute",
    top: -25,
    left: 10,
    maxWidth: 300,
    maxHeight: 300,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "4px",
    boxShadow: "2px 2px 5px #aaa",
  },
  tweetButton: {
    marginBottom: theme.spacing(2),
  },
  divider: {
    width: "100%",
    backgroundColor: "#aaa",
    marginBottom: theme.spacing(2),
  },
  body: {
    marginTop: theme.spacing(3),
  },
}));

export default useStyle;
