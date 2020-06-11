import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Sidebar from "./sidebar";

import { Switch, Route } from "react-router-dom";

import Details from "./details";
import Domain from "./domain/domain";
import DomainDesc from "./domain/domaindesc";
import Locations from "./locations/locations";
import LocationsDesc from "./locations/locationsdesc";
import Payment from "./payment/index";
import PaymentDesc from "./payment/paymentdesc";
import Products from "./products/products";
import Theme from "./theme";
import Shipping from "./shipping";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Store = ({ classes }) => {
  const mediaSize = useMediaQuery("( max-width:450px)");

  return (
    <Container className={classes.container}>
      <Typography className={classes.typo}>Online store settings</Typography>

      <Grid className={classes.main}>
        <Sidebar />

        <Switch>
          <Route exact path="/dashboard/store" component={Details} />
          <Route path="/dashboard/store/theme" component={Theme} />
          <Route exact path="/dashboard/store/domain" component={Domain} />
          <Route path="/dashboard/store/domain/edit" component={DomainDesc} />
          <Route path="/dashboard/store/shipping" component={Shipping} />
          <Route
            exact
            path="/dashboard/store/locations"
            component={Locations}
          />
          <Route
            path="/dashboard/store/locations/edit"
            component={LocationsDesc}
          />
          <Route exact path="/dashboard/store/payment" component={Payment} />
          <Route path="/dashboard/store/payment/edit" component={PaymentDesc} />
          <Route path="/dashboard/store/products" component={Products} />
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
