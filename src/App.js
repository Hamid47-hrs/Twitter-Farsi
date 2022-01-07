import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RightSideBar from "./Components/Layouts/rightSideBar/RightSideBar";
import MainBar from "./Components/Layouts/MainBar/MainBar";
import LeftSideBar from "./Components/Layouts/leftSideBar/LeftSideBar";
import HomePage from "./Components/Layouts/HomePage/HomePage";
import TweetByUser from "./Components/Layouts/Pages/Users/TweetByUser";
import Page404 from "./Components/Layouts/Pages/Page404/Page404";
import Login from "./Components/Layouts/Pages/Login/Login";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <PublicRoute exact path={"/login"} component={Login} />
          <PrivateRoute
            patch={"/"}
            render={() => (
              <Grid container>
                <Grid item sm={2} xs={3}>
                  <RightSideBar />
                </Grid>
                <Grid item sm={7} xs={9}>
                  <MainBar>
                    <Route exact path={"/"} component={HomePage} />
                    <Route
                      exact
                      path={"/users/:user"}
                      component={TweetByUser}
                    />
                    <Route component={Page404} />
                  </MainBar>
                </Grid>
                <Grid item sm={3}>
                  <LeftSideBar />
                </Grid>
              </Grid>
            )}
          />
        </Switch>
      </Router>
      <ToastContainer />
    </Fragment>
  );
};

const isLogin = localStorage.getItem("x-auth-token");

const PublicRoute = ({ component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin) return <Redirect to={"/"} />;
        else return React.createElement(component, props);
      }}
    />
  );
};

const PrivateRoute = ({ render, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin) return render(props);
        else return <Redirect to={"/login"} />;
      }}
    />
  );
};

export default App;
