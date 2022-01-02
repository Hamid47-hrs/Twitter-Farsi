import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    borderRadius: "10px",
    backgroundColor: "#6fcee6b4",
    marginTop: theme.spacing(2),
    padding: theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    marginLeft: theme.spacing(1),
  },
}));

export default useStyle;
