import { Typography } from "@material-ui/core";
import useStyle from "./Page404Style";

const Page404 = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h1">
        خطای 404
      </Typography>
      <Typography className={classes.content}>
        صفحه مورد نظر پیدا نشد.
      </Typography>
      <Typography className={classes.content}> احتمالا آدرس وارد شده درست نیست یا صفحه مورد نظر
        شما حذف شده است.</Typography>
    </div>
  );
};
export default Page404;
