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

import {withRouter} from 'react-router-dom'

import Store from '../../components/dashboard/store'

const Dashboard = ({classes,history}) => {


const icons=[
   
    {
        icon:<IoIosSpeedometer/>,
        path:'/dashboard'
        },
    {
        icon:<AiFillAppstore/>,
        path:'/dashboard/orders',
        name:'orders'
    },
    {
        icon:<LoyaltyIcon/>,
        path:'/dashboard/product',
        name:'product'
    },
    {
        icon:<FaBoxOpen/>,
        path:'/dashboard/categories',
        name:'categories'
    },
    {
        icon:<FaUsers/>,
        path:'/dashboard/customers',
        name:'customers'
    },
    {
        icon:<IoIosDocument/>,
        path:'/dashboard/coupons',
        name:'coupons'
    },
    {
        icon:<FaAppStoreIos/>,
        path:'/dashboard/apps',
        name:'apps'
    },
    {
        icon:<LaptopMacIcon/>,
        path:'/dashboard/services',
        name:'services'
    },
    {
        icon:<FaStore/>,
        path:'/dashboard/store',
        path1:'/dashboard/store/theme',
        path2:'/dashboard/store/domain',
        path3:'/dashboard/store/shipping',
        path4:'/dashboard/store/locations',
        path5:'/dashboard/store/payment',
        path6:'/dashboard/store/products',
        name:'store'
    },
    {
        icon:<FaUserCircle/>,
        path:'/dashboard/users',
        name:'users'
    },
    {
        icon:<FiSettings/>,
        path:'/dashboard/settings',
        name:'settings'
    },
    {
        icon:<RiLogoutBoxRLine/>,
        path:'/'
    }

]

    return (
        <Grid>
            <Navbar/>

<Grid container className={classes.grid} >

<Grid container className={classes.sidebar}>

<Paper className={classes.sidebarPaper}>

<Grid container className={classes.icons}>



{
    icons.map((i,k)=>{
  return  [i.path,i.path1,i.path2,i.path3,i.path4,i.path5,i.path6].includes(history.location.pathname)  ?(
<IconButton 
onClick={()=>history.push(i.path)}
className={[classes.activeIconBtn,classes.iconBtn]}>
{i.icon}
</IconButton>
    ):(
    <IconButton
    onClick={()=>history.push(i.path)}
    key={k} className={classes.iconBtn} >
{i.icon}
    </IconButton>
    )
    })
}

</Grid>



</Paper>

</Grid>


{
history.location.pathname.split('/').includes('store')?(
<Store/>
):(
<Grid style={{margin: 'auto'}}>
    {history.location.pathname.split('/').slice(-1)}  
    </Grid>
)
}




</Grid>

        </Grid>
    )
}

const styles=theme=>({

grid:{
    height:'121vh',
    width:'100%',
    background:theme.palette.primary.dashboardBackground,
    display:'flex',
    overflow:'hidden',
    maxWidth:'100%'
    // bottom:0
},
sidebar:{
    height:'121vh',
    width:'4rem'
},
sidebarPaper:{
    height:'121vh',
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

export default withRouter(withStyles(styles)(Dashboard))
