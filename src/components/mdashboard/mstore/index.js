import React,{lazy,Suspense} from "react";
import { Switch, Route } from "react-router-dom";
import Loader from '../../general/loader'

const Theme =lazy(()=>import("./theme"))
const Home =lazy(()=>import("./home"))
const Settings =lazy(()=>import("./settings"))
const Details =lazy(()=>import("./details"))


const Store = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Switch>
        <Route exact path="/dashboard/store" component={Home} />
        <Route path="/dashboard/store/settings" component={Settings} />
        <Route path="/dashboard/store/details" component={Details} />
        <Route path="/dashboard/store/theme" component={Theme} />
      </Switch>
    </Suspense>
  );
};

export default Store;
