import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Settings from "./settings";
import Details from "./details"

const Store = () => {
  return (
    <Switch>
      <Route exact path="/dashboard/store" component={Home} />
      <Route path="/dashboard/store/settings" component={Settings} />
      <Route path="/dashboard/store/details" component={Details} />
    </Switch>
  );
};

export default Store;
