import React from 'react';
import './App.css';
import Auth from './containers/auth/auth'
import SignUp from './containers/auth/signUp'
import Login from './containers/auth/loginMobile'
import Verification from './containers/auth/verification'
import withStyles from '@material-ui/core/styles/withStyles'
import {Switch,Route} from 'react-router-dom'
import Dashboard from './containers/dashboard'


const App=({classes})=> {


  return (
<Switch>

<Route exact path="/" component={Auth}/>
<Route exact path="/signUp" component={SignUp}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/verification" component={Verification}/>
<Route exact path="/dashboard" component={Dashboard}/>
<Route  path="/dashboard/orders" component={Dashboard}/>
<Route  path="/dashboard/product" component={Dashboard}/>
<Route  path="/dashboard/categories" component={Dashboard}/>
<Route  path="/dashboard/customers" component={Dashboard}/>
<Route  path="/dashboard/coupons" component={Dashboard}/>
<Route  path="/dashboard/apps" component={Dashboard}/>
<Route  path="/dashboard/services" component={Dashboard}/>


<Route exact path="/dashboard/store" component={Dashboard}/>
<Route  path="/dashboard/store/theme" component={Dashboard}/>


<Route  path="/dashboard/store/domain" component={Dashboard}/>
<Route  path="/dashboard/store/domain/edit"  component={Dashboard}/>


<Route  path="/dashboard/store/shipping" component={Dashboard}/>
<Route  path="/dashboard/store/locations" component={Dashboard}/>
<Route  path="/dashboard/store/payment" component={Dashboard}/>
<Route  path="/dashboard/store/products" component={Dashboard}/>




<Route  path="/dashboard/users" component={Dashboard}/>
<Route  path="/dashboard/settings" component={Dashboard}/>


</Switch>
);
}


const styles =theme=>({


})

export default withStyles(styles)(App);
