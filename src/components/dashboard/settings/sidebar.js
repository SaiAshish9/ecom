import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import {FaStore,FaBalanceScale} from 'react-icons/fa'
import {BsCreditCard,BsGrid1X2,BsFileEarmarkRuled} from 'react-icons/bs'
import {AiOutlineComment} from 'react-icons/ai'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import {RiGitRepositoryPrivateLine} from 'react-icons/ri'

import {withRouter} from 'react-router-dom'


const Sidebar = ({classes,history}) => {


const settings=[
    {
        title: 'Account Details',
        icon:<FaStore />,
        links:[
            '/dashboard/settings'
        ]
    },
    {
        title: 'Subscription',
        icon:<BsCreditCard/>,
        links:[
            '/dashboard/settings/Subscription'
        ]
    },
    {
        title: 'ECOM Balance',
        icon:<FaBalanceScale/>,
        links:[
            '/dashboard/settings/balance'
                ]
    },
    {
        title: 'Language',
        icon:<AiOutlineComment/>,
        links:[
            '/dashboard/settings/language'
        ]
    },
    {
        title: 'Contact Us',
        icon:<ContactPhoneIcon/>,
        links:[
            '/dashboard/settings/contact',
        ]
    },
    {
        title: 'Preferences',
        icon:<BsGrid1X2/>,
        links:[
            '/dashboard/settings/preferences',

        ]
    },
    {
        title: 'Privacy Policy',
        icon:<RiGitRepositoryPrivateLine/>,
        links:[
            '/dashboard/settings/privacy'
        ]
        },
        {
            title: 'Terms & Conditions',
            icon:<BsFileEarmarkRuled/>,
            links:[
                '/dashboard/settings/terms'
            ]
            },
    
]

    return (
      
    <Grid lg={3} className={classes.grid} >

{
    settings.map((i,k)=>(



        <Paper
        onClick={
            ()=>{
                history.push(i.links[0])
            }
        }
        elevation={i.links.includes(history.location.pathname)?1:0} key={k}
 
        className={i.links.includes(history.location.pathname)?classes.activeCard:classes.settingsCard}>
            
<IconButton color="primary">
{i.icon}
</IconButton>

<Typography component="div" style={{fontSize:15,textAlign: 'start',width:'60%'}}>
{i.title}
</Typography>


        </Paper>


    ))
}

    </Grid>





    )
}



const styles =theme=>({

btnGrp:{
background:'#fff',
textTransform:'none',
border:`0.08rem solid ${theme.palette.primary.main}`,
color:theme.palette.primary.gray,

},

label:{
color:theme.palette.primary.lightgray
},


typo:{
    color:theme.palette.primary.gray,
    fontSize:'1.2rem'
},

grid:{
    height:'90vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around'
},
settingsCard:{
    height:'10vh',
    display:'flex',
    alignItems:'center',
    // justifyContent:'space-between',
    padding:'0 10px',
    color:theme.palette.primary.gray,
    cursor:'pointer'
},
activeCard:{
    height:'10vh',
    display:'flex',
    alignItems:'center',
    // justifyContent:'space-between',
    padding:'0 10px',
    color:theme.palette.primary.gray,
    border:`0.1rem solid ${theme.palette.primary.main}`,
    cursor:'pointer'
},


})


export default withRouter(withStyles(styles)(Sidebar))