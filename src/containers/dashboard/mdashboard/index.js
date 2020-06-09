import React from 'react'
import Home from './home'
import {Switch,Route} from 'react-router-dom'
import MStore from '../../../components/mdashboard/mstore'
import BottomNavigation from '../../../components/mdashboard/footer'

const Dashboard = () => {
    return (
        <React.Fragment>
        <Switch>

            <Route exact path="/dashboard" component={Home}  />
            <Route path ="/dashboard/store" component={MStore}/>

        </Switch>

        <BottomNavigation/>

        </React.Fragment>

    )

}

export default Dashboard
