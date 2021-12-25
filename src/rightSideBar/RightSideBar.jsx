import useStyles from "./RightBarStyle";

const RightSideBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>right side bar</div>
    )
}

export default RightSideBar;