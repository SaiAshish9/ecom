import React from "react";
import Home from "./home";
import { Switch, Route } from "react-router-dom";
import MStore from "../../../components/mdashboard/mstore";
import MCustomers from "../../../components/mdashboard/mcustomers";
import BottomNavigation from "../../../components/mdashboard/footer";
import MDeliveries from "../../../components/mdashboard/mdeliveries";
import Options_Orders from "../../../components/mdashboard/home/orders"
import Options_Sales from "../../../components/mdashboard/home/sales";
import MSettings from "../../../components/mdashboard/msettings"
import MSubscriptions from "../../../components/mdashboard/msubscriptions";
import MNotifications from "../../../components/mdashboard/mnotifications";
import MOrders from "../../../components/mdashboard/morders";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/dashboard" component={Home} />
        <Route path="/dashboard/store" component={MStore} />
        <Route path="/dashboard/settings" component={MSettings} />
        <Route path="/dashboard/subscriptions" component={MSubscriptions} />
        <Route path="/dashboard/customers" component={MCustomers} />
        <Route path="/dashboard/deliveries" component={MDeliveries} />
        <Route path="/dashboard/notifications" component={MNotifications} />
        <Route path="/dashboard/options/orders" component={Options_Orders} />
        <Route path="/dashboard/options/sales" component={Options_Sales} />
        <Route path="/dashboard/orders" component={MOrders} />
      </Switch>
      <BottomNavigation />
    </React.Fragment>
  );
};

export default Dashboard;
