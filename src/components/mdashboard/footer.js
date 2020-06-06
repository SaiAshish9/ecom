import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import {IoIosSpeedometer} from 'react-icons/io'
import {AiFillAppstore} from 'react-icons/ai'
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import {FaStore} from 'react-icons/fa'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import useMediaQuery from '@material-ui/core/useMediaQuery'

const options=[
    {
        name:'Dashboard',
        icon:<IoIosSpeedometer/>,
        path:''
    },
    {
        name:'Orders',
        icon:<AiFillAppstore/>,
        path:''
    },
    {
        name:'Products',
        icon:<LoyaltyIcon style={{fontSize:15}}/>,
        path:''
    },
    {
        name:'Notifications',
        icon:<NotificationsIcon style={{fontSize:15}}/>,
        path:''
    },
    {
        name:'Store',
        icon:<FaStore />,
        path:''
    },

]

const useStyles = makeStyles({
  root: {
      position:'fixed',
      bottom:0,
      fontSize:10,
      "&$selected":{
      fontSize:8,
      },
      width:'100%',
      height:'10vh',
      paddingLeft:26,
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around'
  },
  selected:{
    fontSize:10
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Dashboard');

  const MediaSize=useMediaQuery('(max-width:400px)')


  return (


    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >



{
    options.map((i,k)=>(
     
      !MediaSize ? ( <BottomNavigationAction
          key={k}
          value={i.name}
          label={i.name} 
          icon={i.icon}
           />
      ):(
        k!==3&&( 
          <BottomNavigationAction
          key={k}
          value={i.name}
          label={i.name} 
          icon={i.icon}
           />
        )
      )
    ))
}


    </BottomNavigation>
 

  );
}