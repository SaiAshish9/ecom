import React from 'react'
import Navbar from '../../components/dashboard/navbar'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'

import {IoIosSpeedometer,IoIosDocument} from 'react-icons/io'
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import {FaBoxOpen,FaUserCircle,FaStore,FaUsers,FaAppStoreIos} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import {FiSettings} from 'react-icons/fi'
import {RiLogoutBoxRLine} from 'react-icons/ri'

const Dashboard = ({classes}) => {


const icons=[
   
    {
        icon:<IoIosSpeedometer/>,
        path:''
    },
    {
        icon:<AiFillAppstore/>,
        path:''
    },
    {
        icon:<LoyaltyIcon/>,
        path:''
    },
    {
        icon:<FaBoxOpen/>,
        path:''
    },
    {
        icon:<FaUsers/>,
        path:''
    },
    {
        icon:<IoIosDocument/>,
        path:''
    },
    {
        icon:<FaAppStoreIos/>,
        path:''
    },
    {
        icon:<LaptopMacIcon/>,
        path:''
    },
    {
        icon:<FaStore/>,
        path:''
    },
    {
        icon:<FaUserCircle/>,
        path:''
    },
    {
        icon:<FiSettings/>,
        path:''
    },
    {
        icon:<RiLogoutBoxRLine/>,
        path:''
    }

]

    return (
        <React.Fragment>
            <Navbar/>

<Grid component="div" className={classes.grid} >

<Grid component="div" className={classes.sidebar}>

<Paper className={classes.sidebarPaper}>

<Grid className={classes.icons}>



{
    icons.map((i,k)=>{
  return  k==0?(
<IconButton className={[classes.activeIconBtn,classes.iconBtn]}>
{i.icon}
</IconButton>
    ):(
    <IconButton key={k} className={classes.iconBtn} >
{i.icon}
    </IconButton>
    )
    })
}

</Grid>



</Paper>

</Grid>

<Grid style={{margin: 'auto'}}>
Dashboard
</Grid>

</Grid>

        </React.Fragment>
    )
}

const styles=theme=>({

grid:{
    height:'90vh',
    width:'100vw',
    background:theme.palette.primary.dashboardBackground,
    display:'flex'
},
sidebar:{
    height:'91vh',
    width:'4rem'
},
sidebarPaper:{
    height:'91vh',
    width:'100%',
    paddingTop:'5vh'
},
icons:{
    height:'78vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around'
},
iconBtn:{
    width:'100%',
    borderRadius:'0px',
    color:'#babbbf',
    '&:hover':{
        color:'#52565e',
    }
},
activeIconBtn:{
color:'#52565e',
background:theme.palette.primary.iconBtnBackground,
borderLeft:`5px solid ${theme.palette.primary.main}`
}

})

export default withStyles(styles)(Dashboard)
