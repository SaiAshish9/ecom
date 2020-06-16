import React from "react";
import Home from "./home";
import { Switch, Route } from "react-router-dom";
import MStore from "../../../components/mdashboard/mstore";
import MCustomers from "../../../components/mdashboard/mcustomers";
import BottomNavigation from "../../../components/mdashboard/footer";
import MDeliveries from "../../../components/mdashboard/mdeliveries";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/dashboard" component={Home} />
        <Route path="/dashboard/store" component={MStore} />
        <Route path="/dashboard/customers" component={MCustomers} />
        <Route path="/dashboard/deliveries" component={MDeliveries} />
      </Switch>

      <BottomNavigation />
    </React.Fragment>
  );
};

export default Dashboard;
