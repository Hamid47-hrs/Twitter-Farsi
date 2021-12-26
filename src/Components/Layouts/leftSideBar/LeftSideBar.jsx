import useStyles from "./LeftBarStyle";

const LeftSideBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>left side bar</div>
    )
}

export default LeftSideBar;