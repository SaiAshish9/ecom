import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "../../general/loader";

const Home = lazy(() => import("./home"));

const Deliveries = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/dashboard/deliveries" component={Home} />
      </Switch>
    </Suspense>
  );
};

export default Deliveries;
