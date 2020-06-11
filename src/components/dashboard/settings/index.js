import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Sidebar from "./sidebar";

import { Switch, Route } from "react-router-dom";

import Details from "./details/details";
import DetailsInfo from "./details/detailsInfo";
import Balance from "./balance";
import Contact from "./contact";
import Language from "./language";
import Preferences from "./preferences";
import Privacy from "./privacy";
import Subscription from "./subscription";
import Terms from "./terms";

const Store = ({ classes }) => {
  return (
    <Container className={classes.container}>
      <Typography className={classes.typo}>General Settings</Typography>

      <Grid className={classes.main}>
        <Sidebar />

        <Switch>
          <Route exact path="/dashboard/settings" component={Details} />
          <Route
            path="/dashboard/settings/details/edit"
            component={DetailsInfo}
          />
          <Route path="/dashboard/settings/balance" component={Balance} />
          <Route path="/dashboard/settings/contact" component={Contact} />
          <Route path="/dashboard/settings/language" component={Language} />
          <Route
            path="/dashboard/settings/preferences"
            component={Preferences}
          />
          <Route path="/dashboard/settings/privacy" component={Privacy} />
          <Route
            path="/dashboard/settings/subscription"
            component={Subscription}
          />
          <Route path="/dashboard/settings/terms" component={Terms} />
        </Switch>
      </Grid>
    </Container>
  );
};

const styles = (theme) => ({
  main: {
    display: "flex",
    // justifyContent:'space-between'
  },

  typo: {
    color: theme.palette.primary.gray,
    fontSize: "1.2rem",
  },
  container: {
    padding: "3rem",
  },
});

export default withStyles(styles)(Store);
