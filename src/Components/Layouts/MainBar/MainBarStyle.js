import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lightgreen",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    overflow: "auto",
    height: "100vh",
  },
}));

export default useStyles;
