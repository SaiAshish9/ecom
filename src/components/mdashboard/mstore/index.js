import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './home'
import Settings from './settings'


const Store = () => {
    return (
        <Switch>
            
        <Route exact path="/dashboard/store" component={Home} />
        <Route  path="/dashboard/store/settings" component={Settings}/>


        </Switch>
    )
}



export default Store
