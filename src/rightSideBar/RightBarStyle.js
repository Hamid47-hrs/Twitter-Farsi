import { makeStyles } from "@material-ui/core";
import { blue, red, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: yellow[200],
    padding: "0.2rem",
    paddingTop: theme.spacing(3),
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
  hashLink: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "0.5rem",
    "&:hover": {
      backgroundColor: "#315dee",
      color: "#fff",
    },
  },
  hashLogo: {
    width: "2rem",
    marginLeft: theme.spacing(2),
    border: "1px solid #315dee",
    padding: "0.2rem",
    borderRadius: "4px",
    [theme.breakpoints.down("425")]: {
      width: "30%",
    },
  },
  TagText: {
    fontSize: "1.1rem",
    [theme.breakpoints.down("425")]: {
      fontSize: "0.7rem",
    },
  },
}));

export default useStyles;
