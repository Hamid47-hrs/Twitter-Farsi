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
}));

export default useStyles;
