import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  hashIco: {
    width: "1.5rem",
    marginLeft: theme.spacing(1),
  },
  body: {
    marginTop: theme.spacing(3),
  },
}));

export default useStyle;
