import useStyles from "./MainBarStyle";

const MainBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>Main bar</div>
    )
}

export default MainBar;