import { useState } from "react";
import { Button, Input, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import useStyle from "./loginStyle";

const LOGIN_TAB = 1;
const REGISTER_TAB = 2;

const Login = () => {
    const classes = useStyle();
    const [tab, setTab] = useState(LOGIN_TAB)
    const handleChange = (event, newValue) => {
        setTab(newValue);
    };
    return (
        <Paper className={classes.root}>
            <div className={classes.container}>
                <Typography className={classes.welcome} variant="h6" component="h2">خوش آمدید</Typography>
                <Typography className={classes.title} variant="h4" component="h1">صفحه ورود به سایت</Typography>
                <Tabs className={classes.form} value={tab} onChange={handleChange}>
                    <Tab label="ورود" value={LOGIN_TAB}></Tab>
                    <Tab label="ثبت نام" value={REGISTER_TAB}></Tab>
                </Tabs>
                {tab === LOGIN_TAB &&
                    <div className={classes.login}>
                        <Typography className={classes.text}>نام کاربری</Typography>
                        <Input className={classes.input}></Input>
                        <Typography className={classes.text}>رمز عبور</Typography>
                        <Input className={classes.input}></Input>
                        <Button className={classes.button}>ورود</Button>
                    </div>}
                {tab === REGISTER_TAB &&
                    <div className={classes.register}>
                        <Typography className={classes.text}>نام کامل</Typography>
                        <Input className={classes.input}></Input>
                        <Typography className={classes.text}>نام کاربری</Typography>
                        <Input className={classes.input}></Input>
                        <Typography className={classes.text}>رمز عبور</Typography>
                        <Input className={classes.input}></Input>
                        <Typography className={classes.text}>تکرار رمز عبور</Typography>
                        <Input className={classes.input}></Input>
                        <Button className={classes.button}>ثبت نام</Button>
                    </div>}
            </div>
        </Paper>
    );
};

export default Login;
