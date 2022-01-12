import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  users: {
    width: "100%",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    justifyContent: "start",
    paddingRight: theme.spacing(1), 
  },
  imageContainer: {
    // display: "inline",
    // position: "relative",
    width: "60px",
    height: "60px",
    overflow: "hidden",
    borderRadius: "50%",
    marginLeft: theme.spacing(2),
  },
  userImage: {
    width: "auto",
    height: "100%",
    marginLeft: "15px",
  },
  buttonContainer: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  userNames: {
    fontSize: "0.9rem",
    textTransform: "capitalize",
  },
  userID: {
    fontSize: "0.9rem",
    textTransform: "capitalize",
    color: "#aaa",
  },
}));

export default useStyle;
