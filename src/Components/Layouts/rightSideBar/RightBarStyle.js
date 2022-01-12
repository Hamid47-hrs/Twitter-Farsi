import { makeStyles } from "@material-ui/core";
import { blue, red, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: yellow[200],
    padding: "0.2rem",
    paddingTop: theme.spacing(3),
    height: "100vh",
    overflow: "auto",
    position: "sticky",
    top: 0,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(5),
  },
  logo: {
    width: "4rem",
    filter:
      "invert(50%) sepia(90%) hue-rotate(140deg) saturate(4) brightness(90%)",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
  },
  title1: {
    color: "#318bf3",
    fontWeight: 700,
    [theme.breakpoints.down("770")]: {
      display: "none",
    },
  },
  title2: {
    fontSize: "130%",
    color: "#318bf3",
    fontWeight: 700,
    [theme.breakpoints.up("770")]: {
      display: "none",
    },
  },
  hashtag: {
    fontWeight: 600,
    fontSize: "1.3rem",
    textAlign: "center",
    textShadow: "0 0 2px #aaa",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("860")]: {
      fontSize: "1rem",
    },
  },
}));

export default useStyles;
