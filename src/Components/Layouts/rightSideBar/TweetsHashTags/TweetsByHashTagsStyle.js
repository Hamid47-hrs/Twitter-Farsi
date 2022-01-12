import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  hashLink: {
    display: "flex",
    justifyContent: "right",
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0.5),
    paddingRight: theme.spacing(3),
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#315dee",
      color: "#fff",
    },
  },
  hashLogo: {
    width: "2rem",
    marginLeft: theme.spacing(2),
    border: "1px solid #315dee",
    padding: theme.spacing(0.5),
    borderRadius: "4px",
    [theme.breakpoints.down("425")]: {
      width: "30%",
    },
  },
  TagText: {
    fontSize: "1rem",
    [theme.breakpoints.down("425")]: {
      fontSize: "0.7rem",
    },
    wordBreak: "break-word",
  },
}));

export default useStyle;
