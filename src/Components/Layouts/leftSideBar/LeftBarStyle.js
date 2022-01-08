import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    height: "100vh",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    "&:hover": {
      cursor: "pointer",
    },
  },
  profileImageContainer: {
    width: 70,
    height: 70,
    overflow: "hidden",
    borderRadius: "50%",
    marginLeft: theme.spacing(2),
    boxShadow: "0 0 10px #aaa",
  },
  profilePicture: {
    width: "auto",
    height: "100%",
    marginLeft: "15px",
  },
  userName: {
    color: "#aaa",
  },
}));

export default useStyles;
