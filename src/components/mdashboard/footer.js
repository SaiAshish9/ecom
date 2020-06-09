import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {IoIosSpeedometer} from 'react-icons/io'
import {AiFillAppstore} from 'react-icons/ai'
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import {FaStore} from 'react-icons/fa'
import NotificationsIcon from '@material-ui/icons/Notifications';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {withRouter} from 'react-router-dom'

const options=[
    {
        name:'Dashboard',
        icon:<IoIosSpeedometer/>,
        path:'/dashboard',
        paths:['/dashboard']
    },
    {
        name:'Orders',
        icon:<AiFillAppstore/>,
        path:'/dashboard/orders',
        paths:['/dashboard/orders'],
    },
    {
        name:'Products',
        icon:<LoyaltyIcon style={{fontSize:15}}/>,
        path:'/dashboard/products',
        paths:['/dashboard/products']
    },
    {
        name:'Notifications',
        icon:<NotificationsIcon style={{fontSize:15}}/>,
        path:'/dashboard/notifications',
        paths:['/dashboard/notifications'],
    },
    {
        name:'Store',
        icon:<FaStore />,
        path:'/dashboard/store',
        paths:[
          '/dashboard/store',
          '/dashboard/store/settings'
        ],
    },

]

const useStyles = makeStyles({
  root: {
      position:'fixed',
      bottom:0,
      fontSize:10,
      background:'#fff',
      "&$selected":{
      fontSize:8,
      },
      width:'100%',
      marginLeft:'2%',
      marginRight:'10%',
      height:'10vh',
      // paddingLeft:26,
      // display:'flex',
      // alignItems:'center',
      // justifyContent:'space-around'
  },
  selected:{
    fontSize:10,
    margin:1,
  }
});

const SimpleBottomNavigation=({history})=> {
  const classes = useStyles();
  const [value, setValue] = React.useState('/dashboard');

  const MediaSize=useMediaQuery('(max-width:350px)')


  return (

<React.Fragment>


{
  options.map(x=>x.path).includes(history.location.pathname)
  &&(

    <BottomNavigation
      value={history.location.pathname}
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
          onClick={()=>{
            history.push(i.path)
          }}
          value={
           i.paths.includes(history.location.pathname)
           ?
           history.location.pathname
           :
           i.path          
          }
          label={
            <p 
            style={{
              marginTop:2,
              fontSize:10
            }}
            >
              {i.name}
            </p>
            
            }           icon={i.icon}
           />
      ):(
        k!==3&&( 
          <BottomNavigationAction
          key={k}
          onClick={()=>{
            history.push(i.path)
          }}
          value={
            i.paths.includes(history.location.pathname)
            ?
            history.location.pathname
            :
            i.path          
           }
          label={
          <p 
          style={{
            marginTop:2,
            fontSize:10,
          }}
          >
            {i.name}
          </p>
          
          } 
          icon={i.icon}
           />
        )
      )
    ))
}


    </BottomNavigation>
  )
}


 
    </React.Fragment>

  );
}

export default withRouter(SimpleBottomNavigation)
