import { Button, Container, Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "./LeftBarStyle";
import pic from "../../../images/Hamid.jpg"
const LeftSideBar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
      >
          <Grid item className={classes.header}>
              <img className={classes.profilePicture} src={pic} alt="prifile pic"/>
              <div>
                  <Typography>حمید رضا</Typography>
                  <Typography className={classes.userName}>HamidReza@</Typography>
              </div>
          </Grid>
          <Divider />
          <Grid item>
              <div className={classes.buttonContainer}>
                  <Button href="#" className={classes.users}>
                      <img className={classes.userImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU" alt="jim"/>
                      <div>
                          <Typography className={classes.userNames}>Jim Cari</Typography>
                          <Typography className={classes.userID}>jim4carrey@</Typography>
                      </div>
                  </Button>
                  <Divider />
                  <Button href="#" className={classes.users}>
                      <img className={classes.userImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU" alt="jim"/>
                      <div>
                          <Typography className={classes.userNames}>Jim Cari</Typography>
                          <Typography className={classes.userID}>jim4carrey@</Typography>
                      </div>
                  </Button>
                  <Divider />
                  <Button href="#" className={classes.users}>
                      <img className={classes.userImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU" alt="jim"/>
                      <div>
                          <Typography className={classes.userNames}>Jim Cari</Typography>
                          <Typography className={classes.userID}>jim4carrey@</Typography>
                      </div>
                  </Button>
                  <Divider />
                  <Button href="#" className={classes.users}>
                      <img className={classes.userImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU" alt="jim"/>
                      <div>
                          <Typography className={classes.userNames}>Jim Cari</Typography>
                          <Typography className={classes.userID}>jim4carrey@</Typography>
                      </div>
                  </Button>
                  <Divider />
                  <Button href="#" className={classes.users}>
                      <img className={classes.userImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU" alt="jim"/>
                      <div>
                          <Typography className={classes.userNames}>Jim Cari</Typography>
                          <Typography className={classes.userID}>jim4carrey@</Typography>
                      </div>
                  </Button>
                  <Divider />
                  <Button href="#" className={classes.users}>
                      <img className={classes.userImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU" alt="jim"/>
                      <div>
                          <Typography className={classes.userNames}>Jim Cari</Typography>
                          <Typography className={classes.userID}>jim4carrey@</Typography>
                      </div>
                  </Button>
                  <Divider />
                  <Button href="#" className={classes.users}>
                      <img className={classes.userImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd6FLxNV-xGNmMkIIDxyUFin0zE2TMa-bkA&usqp=CAU" alt="jim"/>
                      <div>
                          <Typography className={classes.userNames}>Jim Cari</Typography>
                          <Typography className={classes.userID}>jim4carrey@</Typography>
                      </div>
                  </Button>
                  
              </div>
          </Grid>
      </Grid>
    </Container>
  );
};

export default LeftSideBar;
