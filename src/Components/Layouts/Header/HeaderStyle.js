import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  header: {
    display: "flex",
    margin: "0.5rem 0",
    alignItems: "flex-end",
  },
  divider: {
    width: "100%",
    backgroundColor: "#aaa",
    marginBottom: theme.spacing(2),
  },
}));

export default useStyle;
