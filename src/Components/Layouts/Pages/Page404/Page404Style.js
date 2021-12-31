import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#113ead",
    textShadow: "0 0 10px #aaa",
  },
  content: {
    lineHeight: "3rem",
    fontWeight: 700,
    fontSize: "1.3rem",
    textShadow: "0 0 4px #aaa",
  },
}));

export default useStyle;
