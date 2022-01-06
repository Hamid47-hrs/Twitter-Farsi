import { useState } from "react";
import { Button, Input, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import useStyle from "./loginStyle";
import { toast } from "react-toastify";
import axios from "axios";

const LOGIN_TAB = 1;
const REGISTER_TAB = 2;

const Login = () => {
  const classes = useStyle();
  const [tab, setTab] = useState(LOGIN_TAB);
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const [userNameLogin, setUserNameLogin] = useState("");
  const [userPasswordLogin, setUserPasswordLogin] = useState("");
  const [userNameRegister, setUserNameRegister] = useState("");
  const [userPasswordRegister, setUserPasswordRegister] = useState("");

  const validateLogin = (user) => {
    if (!user.username) return "نام کاربری وارد نشده است";
    if (!user.password) return "رمز عبور وارد نشده است";
  };
  const handleLogin = () => {
    const user = {
      username: userNameLogin,
      password: userPasswordLogin,
    };

    const loginError = validateLogin(user);

    if (loginError) return toast.warn(loginError);
    axios
      .post("https://twitterapi.liara.run/api/login", user)
      .then((response) => {
        toast.success("ورود با موفقیت انجام شد");
        console.log(response);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("image", response.data.image);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("x-auth-token", response.data["x-auth-token"]);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error);
      });
  };
  return (
    <Paper className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.welcome} variant="h6" component="h2">
          خوش آمدید
        </Typography>
        <Typography className={classes.title} variant="h4" component="h1">
          صفحه ورود به سایت
        </Typography>
        <Tabs className={classes.form} value={tab} onChange={handleChange}>
          <Tab label="ورود" value={LOGIN_TAB}></Tab>
          <Tab label="ثبت نام" value={REGISTER_TAB}></Tab>
        </Tabs>
        {tab === LOGIN_TAB && (
          <div className={classes.login}>
            <Typography className={classes.text}>نام کاربری</Typography>
            <Input
              className={classes.input}
              value={userNameLogin}
              onChange={(e) => setUserNameLogin(e.target.value)}
            ></Input>
            <Typography className={classes.text}>رمز عبور</Typography>
            <Input
              className={classes.input}
              value={userPasswordLogin}
              onChange={(e) => setUserPasswordLogin(e.target.value)}
            ></Input>
            <Button className={classes.button} onClick={handleLogin}>
              ورود
            </Button>
          </div>
        )}
        {tab === REGISTER_TAB && (
          <div className={classes.register}>
            <Typography className={classes.text}>نام کامل</Typography>
            <Input className={classes.input}></Input>
            <Typography className={classes.text}>نام کاربری</Typography>
            <Input
              className={classes.input}
              value={userNameRegister}
              onChange={(e) => setUserNameRegister(e.target.value)}
            ></Input>
            <Typography className={classes.text}>رمز عبور</Typography>
            <Input
              className={classes.input}
              value={userPasswordRegister}
              onChange={(e) => setUserPasswordRegister(e.target.value)}
            ></Input>
            <Typography className={classes.text}>تکرار رمز عبور</Typography>
            <Input className={classes.input}></Input>
            <Button className={classes.button}>ثبت نام</Button>
          </div>
        )}
      </div>
    </Paper>
  );
};

export default Login;
