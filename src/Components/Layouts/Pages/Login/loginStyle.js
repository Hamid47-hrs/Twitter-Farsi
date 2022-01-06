import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundImage: `url("https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg?size=626&ext=jpg&ga=GA1.2.2026049374.1635552000")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    height: "100vh",
    paddingTop: theme.spacing(10)
  },
  container: {
    width: "fit-content",
    margin: "auto",
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  form: {
    width: "fit-content",
    margin: "auto",
    backgroundColor: "#0000008a",
    borderRadius: "4px 4px 0 0",
    color: "#fff",
  },
  login: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: "0 0 4px 4px",
    color: "#fff",
    backgroundColor: "#00000065",
  },
  register: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: "0 0 4px 4px",
    color: "#fff",
    backgroundColor: "#00000065",
  },
  text: {
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  input: {
    width: "90%",
    margin: "auto",
    color: "#fff",
  },
  button: {
    margin: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    padding: "0.5rem 6rem 0.5rem 6rem",
    color: "#fff",
    backgroundColor: "#003feba0",
    "&:hover": {
      backgroundColor: "#003feb",
    },
  },
}));

export default useStyle;
