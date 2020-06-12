import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "../../general/loader";

const Theme = lazy(() => import("./theme"));
const Home = lazy(() => import("./home"));
const Settings = lazy(() => import("./settings"));
const Details = lazy(() => import("./details"));
const Domain = lazy(() => import("./domain/domain"));
const DomainDesc = lazy(() => import("./domain/editdomain"));
const Shipping = lazy(() => import("./shipping"));
const ShippingDesc = lazy(() => import("./shipping/shippingdesc"));
const Locations = lazy(() => import("./locations"));
const LocationsDesc = lazy(() => import("./locations/locationsDesc"));
const EditLocation=lazy(() => import("./locations/editlocations"));
const Payment = lazy(() => import("./payment"))
const PaymentDesc = lazy(() => import("./payment/editpayment"));

const Store = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/dashboard/store" component={Home} />
        <Route path="/dashboard/store/settings" component={Settings} />
        <Route path="/dashboard/store/details" component={Details} />
        <Route path="/dashboard/store/theme" component={Theme} />
        <Route exact path="/dashboard/store/domain" component={Domain} />
        <Route path="/dashboard/store/domain/edit" component={DomainDesc} />
        <Route exact path="/dashboard/store/shipping" component={Shipping} />
        <Route path="/dashboard/store/shipping/edit" component={ShippingDesc} />
        <Route exact path="/dashboard/store/locations" component={Locations} />
        <Route
          exact
          path="/dashboard/store/locations/edit"
          component={LocationsDesc}
        />
        <Route
          path="/dashboard/store/locations/edit/location"
          component={EditLocation}
        />
      </Switch>
      <Route exact path="/dashboard/store/payment" component={Payment} />
      <Route path="/dashboard/store/payment/edit" component={PaymentDesc} />
    </Suspense>
  );
};

export default Store;
