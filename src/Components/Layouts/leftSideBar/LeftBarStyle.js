import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  profilePicture: {
    width: "40%",
    borderRadius: "50%",
    marginLeft: theme.spacing(2),
    boxShadow: "0 0 10px #aaa",
  },
  userName: {
    color: "#aaa",
  },
  users: {
    width: "100%",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
  userImage: {
    width: "50px",
    borderRadius: "50%",
    marginLeft: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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

export default useStyles;
