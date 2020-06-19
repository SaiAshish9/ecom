import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Home from "./home"
import Preferences from "./preferences"
import {Switch, Route} from "react-router-dom"

const Settings = () => {
  return (
    <Fragment>
     <Switch>
        <Route exact path="/dashboard/settings" component={Home} />
        <Route path="/dashboard/settings/preferences" component={Preferences} />
     </Switch>
    </Fragment>
  );
};


export default withRouter(Settings)
