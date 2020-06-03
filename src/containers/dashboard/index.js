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

import {withRouter,Switch,Route} from 'react-router-dom'

import Store from '../../components/dashboard/store'
import Settings from '../../components/dashboard/settings'
import Products from '../../components/dashboard/products'
import Categories from '../../components/dashboard/categories'

const Dashboard = ({classes,history}) => {


const icons=[
   
    {
        icon:<IoIosSpeedometer/>,
        paths:[
            '/dashboard'
        ]
        },
    {
        icon:<AiFillAppstore/>,
        paths:[
            '/dashboard/orders'
        ],
        name:'orders'
    },
    {
        icon:<LoyaltyIcon/>,
        paths:[
            '/dashboard/product',
            '/dashboard/product/products/edit',
            '/dashboard/product/categories',
            '/dashboard/product/options'

        ],
        name:'product'
    },
    {
        icon:<FaBoxOpen/>,
        paths:[
            '/dashboard/categories',
            '/dashboard/categories/edit'
        ],
        name:'categories'
    },
    {
        icon:<FaUsers/>,
        paths:[
            '/dashboard/customers'
        ],
        name:'customers'
    },
    {
        icon:<IoIosDocument/>,
        paths:[
            '/dashboard/coupons'
        ],
        name:'coupons'
    },
    {
        icon:<FaAppStoreIos/>,
        paths:[
            '/dashboard/apps'
        ],
        name:'apps'
    },
    {
        icon:<LaptopMacIcon/>,
        paths:[
            '/dashboard/services'
        ],
        name:'services'
    },
    {
        icon:<FaStore/>,
        paths:[
            '/dashboard/store',
            '/dashboard/store/theme',
            '/dashboard/store/domain',
            '/dashboard/store/shipping',
            '/dashboard/store/locations',
            '/dashboard/store/locations/edit',
            '/dashboard/store/payment',
            '/dashboard/store/payment/edit',
            '/dashboard/store/products',
            '/dashboard/store/domain/edit'
        ],
        name:'store'
    },
    {
        icon:<FaUserCircle/>,
        paths:[
            '/dashboard/users'
        ],
        name:'users'
    },
    {
        icon:<FiSettings/>,
        paths:[
            '/dashboard/settings',
            '/dashboard/settings/details/edit',
            '/dashboard/settings/Subscription',
            '/dashboard/settings/preferences',
            '/dashboard/settings/balance',
            '/dashboard/settings/contact',
            '/dashboard/settings/language',
            '/dashboard/settings/privacy',
            '/dashboard/settings/terms'




        ],
        name:'settings'
    },
    {
        icon:<RiLogoutBoxRLine/>,
        paths:[
            '/'
        ]
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
  return  i.paths.includes(history.location.pathname)  ?(
<IconButton 
onClick={()=>history.push(i.path)}
className={[classes.activeIconBtn,classes.iconBtn]}>
{i.icon}
</IconButton>
    ):(
    <IconButton
    onClick={()=>history.push(i.paths[0])}
    key={k} className={classes.iconBtn} >
{i.icon}
    </IconButton>
    )
    })
}

</Grid>



</Paper>

</Grid>

<Switch>

<Route exact path="/dashboard" >
<Grid style={{margin: 'auto'}}>
    {history.location.pathname.split('/').slice(-1)}  
</Grid>
</Route>
<Route path="/dashboard/orders" >
<Grid style={{margin: 'auto'}}>
    {history.location.pathname.split('/').slice(-1)}  
</Grid>
</Route>

<Route path="/dashboard/product" component={Products} />

<Route path="/dashboard/categories" component={Categories}  />

<Route path="/dashboard/customers" >
<Grid style={{margin: 'auto'}}>
    {history.location.pathname.split('/').slice(-1)}  
</Grid>
</Route>
<Route path="/dashboard/coupons" >
<Grid style={{margin: 'auto'}}>
    {history.location.pathname.split('/').slice(-1)}  
</Grid>
</Route>
<Route path="/dashboard/apps" >
<Grid style={{margin: 'auto'}}>
    {history.location.pathname.split('/').slice(-1)}  
</Grid>
</Route>
<Route path="/dashboard/services" >
<Grid style={{margin: 'auto'}}>
    {history.location.pathname.split('/').slice(-1)}  
</Grid>
</Route>
<Route path="/dashboard/store" component={Store} />
<Route path="/dashboard/users" >
<Grid style={{margin: 'auto'}}>
    {history.location.pathname.split('/').slice(-1)}  
</Grid>
</Route>
<Route path="/dashboard/settings" component={Settings} />




</Switch>



</Grid>

        </Grid>
    )
}

const styles=theme=>({

grid:{
    // height:'121vh',
    width:'100%',
    background:theme.palette.primary.dashboardBackground,
    display:'flex',
    overflow:'hidden',
    maxWidth:'100%'
    // bottom:0
},
sidebar:{
    minHeight:'90vh',
    width:'4rem'
},
sidebarPaper:{
    // height:'131vh',
    width:'100%',
    paddingTop:'5vh'
},
icons:{
    minHeight:'78vh',
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
