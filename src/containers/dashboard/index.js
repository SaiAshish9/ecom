import React from 'react'
import Navbar from '../../components/dashboard/navbar'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';

const Dashboard = ({classes}) => {
    return (
        <React.Fragment>
            <Navbar/>

<Grid component="div" className={classes.grid} >

<Grid component="div" className={classes.sidebar}>

<Paper className={classes.sidebarPaper}>

<Grid className={classes.icons}>

<IconButton className={[classes.activeIconBtn,classes.iconBtn]}>
<ChildFriendlyIcon  className={classes.icon} style={{color:'#52565e'}}  />  
</IconButton>

{
    [...Array(11).keys()].map((i,k)=>(
    <IconButton key={k} className={classes.iconBtn} >
      <ChildFriendlyIcon  className={classes.icon} />  
    </IconButton>
    ))
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
icon:{
color:'#babbbf',
'&:hover':{
    color:'#52565e',
}
},
iconBtn:{
    width:'100%',
    borderRadius:'0px'
},
activeIconBtn:{
background:theme.palette.primary.iconBtnBackground,
borderLeft:`5px solid ${theme.palette.primary.main}`
}

})

export default withStyles(styles)(Dashboard)
