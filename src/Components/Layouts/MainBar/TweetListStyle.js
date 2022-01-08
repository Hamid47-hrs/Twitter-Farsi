import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  imageContainer: {
    width: 60,
    height: 60,
    overflow: "hidden",
    borderRadius: "50%",
  },
  profileImage: {
    width: "auto",
    height: "100%",
    marginLeft: 15,
  },
  content: {
    flex: 1,
    marginRight: theme.spacing(1.5),
  },
  introduction: {
    display: "flex",
    marginBottom: theme.spacing(1),
  },
  userName: {
    fontWeight: 600,
    marginLeft: theme.spacing(2),
  },
  userID: {
    color: "#aaa",
  },
  picContainer: {
    maxHeight: "500px",
    overflow: "hidden",
  },
  userPicture: {
    width: "100%",
    borderRadius: "4px",
    boxShadow: "3px 3px 10px #00000090",
  },
  userText: {
    wordBreak: "break-word",
    textAlign: "justify",
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(1),
  },
  likeButton: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.secondary.main,
    textTransform: "capitalize",
  },
  tweetButton: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.main,
    textTransform: "capitalize",
  },
  likeCount: {
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;
