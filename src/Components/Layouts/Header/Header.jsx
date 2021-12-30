import { Typography, Divider } from "@material-ui/core";
import useStyle from "./HeaderStyle";

const Header = ({ title, icon }) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.header}>
        {icon}
        <Typography className={classes.homeTxt}>{title}</Typography>
      </div>
      <Divider className={classes.divider} />
    </>
  );
};

export default Header;
