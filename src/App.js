import React, { Suspense, lazy } from "react";
import "./App.css";
import Verification from "./containers/auth/verification";
import withStyles from "@material-ui/core/styles/withStyles";
import { Switch, Route } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
const Dashboard = lazy(() => import("./containers/dashboard"));
const MDashboard = lazy(() => import("./containers/dashboard/mdashboard"));
const Home = lazy(() => import("./containers/homepage"));
const Auth = lazy(() => import("./containers/auth/auth"));
const AuthMobile = lazy(() => import("./containers/auth/authMobile"));
const SignUp = lazy(() => import("./containers/auth/signUp"));
const Login = lazy(() => import("./containers/auth/loginMobile"));
// const Test = lazy(() => import("./test2"));

const Loader = ({ classes }) => (
  <Backdrop className={classes.backdrop} open={true}>
    <CircularProgress color="inherit" />
  </Backdrop>
);

const App = ({ classes }) => {
  var mobileSize = useMediaQuery("( max-width:650px )");

  return (
    <Suspense fallback={<Loader classes={classes} />}>
      <Switch>
        {typeof mobileSize !== undefined && mobileSize ? (
          <Route exact path="/" component={AuthMobile} />
        ) : (
          <Route exact path="/" component={Auth}  />
        )}
        <Route exact path="/home" component={Home} />
        <Route exact path="/createStore" component={Auth} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/verification" component={Verification} />
        {typeof mobileSize !== undefined && mobileSize ? (
          <Route path="/dashboard" component={MDashboard} />
        ) : (
          <Route path="/dashboard" component={Dashboard} />
        )}
        {/* <Route path="/test" component={Test} /> */}
      </Switch>
    </Suspense>
  );
};

const styles = (theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary.gray,
    background: theme.palette.primary.dashboardBackground,
  },
});

export default withStyles(styles)(App);
