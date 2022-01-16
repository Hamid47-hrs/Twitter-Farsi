import { Typography } from "@material-ui/core";
import useStyle from "./HashTagsStyle";
import Hashtag from "../../../../images/HashTag.png";
import { Link } from "react-router-dom";

const HashTags = ({ data }) => {
  const classes = useStyle();
  return (
    <Link to={`/hashTag/${data.text}`} className={classes.hashLink}>
      <img src={Hashtag} alt="HashTag-Logo" className={classes.hashLogo} />
      <Typography className={classes.TagText}>{data.text}</Typography>
    </Link>
  );
};

export default HashTags;
