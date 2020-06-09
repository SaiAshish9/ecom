import React,{useState,Suspense,lazy} from 'react';
import './App.css';

import Verification from './containers/auth/verification'
import withStyles from '@material-ui/core/styles/withStyles'
import {Switch,Route} from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'


const Dashboard=lazy(()=>import('./containers/dashboard'))
const MDashboard=lazy(()=>import('./containers/dashboard/mdashboard'))
const Home=lazy(()=>import('./containers/homepage'))
const Auth=lazy(()=>import('./containers/auth/auth'))
const SignUp=lazy(()=>import('./containers/auth/signUp'))
const Login=lazy(()=>import('./containers/auth/loginMobile'))


const Loader=({classes})=>(
  <Backdrop 
className={classes.backdrop}
 open={true}
>
        <CircularProgress color="inherit" />
      </Backdrop>
)

const App=({classes})=> {

  const mobileSize=useMediaQuery('( max-width:650px )')

  return (

<Suspense fallback={<Loader classes={classes} />} >

<Switch>
<Route exact path="/" component={Auth}/>
<Route exact path="/home" component={Home}/>
<Route exact path="/createStore" component={Auth}/>
<Route exact path="/signUp" component={SignUp}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/verification" component={Verification}/>

{
  mobileSize?(
<Route  path="/dashboard" component={MDashboard}/>
  ):
  (
<Route   path="/dashboard" component={Dashboard}/>
  )
}

<Route  path="/dashboard/orders" component={Dashboard}/>
<Route  path="/dashboard/product" component={Dashboard}/>
<Route  path="/dashboard/categories" component={Dashboard}/>
<Route  path="/dashboard/customers" component={Dashboard}/>
<Route  path="/dashboard/coupons" component={Dashboard}/>
<Route  path="/dashboard/apps" component={Dashboard}/>
<Route  path="/dashboard/services" component={Dashboard}/>


{

mobileSize?(

<Route exact path="/dashboard/store" component={MDashboard}/>
  ):(
<Route exact path="/dashboard/store" component={Dashboard}/>
    )

}

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
</Suspense>

);
}


const styles =theme=>({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary.gray ,
    background:theme.palette.primary.dashboardBackground
  },

})

export default withStyles(styles)(App);
