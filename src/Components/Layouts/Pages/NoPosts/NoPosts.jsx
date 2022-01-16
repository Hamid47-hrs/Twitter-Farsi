import { Typography } from "@material-ui/core";
import useStyle from "./NoPostsStyle";

const Page404 = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h1">
        OOPsss
      </Typography>
      <Typography className={classes.content}>
        کاربر مورد نظر شما هنوز پستی منتشر نکرده است.
      </Typography>
    </div>
  );
};
export default Page404;
