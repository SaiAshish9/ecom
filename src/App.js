import React from 'react';
import './App.css';
import Auth from './containers/auth/auth'
import withStyles from '@material-ui/core/styles/withStyles'
import {Switch,Route} from 'react-router-dom'
import Dashboard from './containers/dashboard'

const App=({classes})=> {



  return (
<Switch>

<Route exact path="/" component={Auth}/>
<Route path="/dashboard" component={Dashboard}/>

</Switch>
);
}


const styles =theme=>({


})

export default withStyles(styles)(App);
