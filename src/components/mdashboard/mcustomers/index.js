import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "../../general/loader";

const Home= lazy(() => import("./home"))

const Customers = () => {
    return (
    
    <Suspense fallback={<Loader />}>
        <Switch>
            <Route  exact path="/dashboard/customers" component={Home}/>
        </Switch>
    </Suspense>
    )
}

export default Customers
