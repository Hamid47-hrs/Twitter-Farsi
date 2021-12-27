import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lightgreen",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    overflow: "auto",
  },
  header: {
    margin: "0.5rem 0",
    alignItems: "flex-end",
    "&:hover": {
      color: theme.palette.action.active,
    }
  },
  homeIco: {
    fontSize: "2rem",
    marginLeft: theme.spacing(1),

  },
  divider: {
    width: "100%",
    backgroundColor: "#aaa",
    marginBottom: theme.spacing(2),
  },
  fields: {
    display: "flex",
    alignItems: "center",
  },
  profilePic: {
    width: "6rem",
    borderRadius: "50%",
    marginLeft: theme.spacing(2),
  },
  textInput: {
    flex: 1,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  imgIcon: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    fontSize: "1.7rem",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.dark,
    }
  },
  tweetButton: {
    marginBottom: theme.spacing(2),
  },
  body: {
    marginTop: theme.spacing(3),
  }
}));

export default useStyles;
