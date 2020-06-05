import React,{useState} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {withRouter} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import BottomNavigation from '../../../components/mdashboard/footer'
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '../../../components/general/button'

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: theme.palette.primary.gray,
    },
  }))(LinearProgress);


const MDashboard = ({classes,history}) => {
    return (
        <Grid className={classes.grid}>

<Paper
elevation={0}
className={classes.navbar}
>
<Grid style={{
    display:'flex',
    alignItems:'center'
}} >
<IconButton style={{background:'#dae1ee',margin:'0 10px'}}>
<FingerprintIcon style={{color:'#565a61',cursor:'pointer',fontSize:'17px'}} />
</IconButton>
<Typography style={{color:'#686b73'}}>
    Salim Store
</Typography>
</Grid>
<Grid style={{
    display:'flex',
    alignItems:'center'
}} >
<IconButton color="primary" >
<PlayCircleOutlineIcon/>
</IconButton>
<Switch
color="primary"
checked={true}
/>
</Grid>
</Paper>


<Grid className={classes.main} >


<Paper
style={{
    width:'80%',
    height:'20vh',
    padding:20
}}
>

<Typography className={classes.dark}>
Online store setup is incomplete!
<br/>
Complete is to be ready for orders.
</Typography>

<BorderLinearProgress
 variant="determinate"
 className={classes.progress}
 value={63} />

<Button
style={{
    height:'5vh',
    width:'9rem',
    position:'relative',
    left:'30vw',
    margin:5,
    fontSize:12,
    borderRadius:0
}}
>
    Complete Setup
</Button>

</Paper>


<Grid style={{
    display:'flex',
    width:'80%',
    margin:'10px 0',
    paddingTop:'10px',
    justifyContent:'space-between',alignItems:'center'
}}>

<Typography className={classes.dark} >
Dashboard
</Typography>

<Typography className={classes.dark} >
Location 1
</Typography>


<Typography className={classes.dark} >
Yesterday
</Typography>


</Grid>

<Grid
style={{
    width:'80%',
    height:'20vh',
    margin:'15px 0',
    display:'flex',
    justifyContent:'space-between'
}}
>

<Paper
style={{
    width:'47%',
    height:'20vh'
}}
>
</Paper>



<Paper
style={{
    width:'47%',
    height:'20vh'
}}
>
</Paper>

</Grid>



<Paper
style={{
    width:'80%',
    height:'20vh',
    padding:20,
    margin:'15px 0'
}}
>

</Paper>




<Paper
style={{
    width:'80%',
    height:'20vh',
    padding:20,
    margin:'15px 0'
}}
>
        
</Paper>


<Paper
style={{
    width:'80%',
    height:'20vh',
    padding:20,
    margin:'15px 0'
}}
>
        
</Paper>



</Grid>


<BottomNavigation/>

        </Grid>
    )
}


const styles =theme=>({


progress:{
height:'0.6rem',
borderRadius:10,
margin:'10px 0',
background:theme.palette.primary.dashboardBackground,
},

main:{
padding:'20px 0',
flexDirection:'column',
display:'flex',
alignItems:'center',
justifyContent:'center',
marginBottom:'10vh'
},

light:{
  fontSize:12,
  color:theme.palette.primary.lightgray  
},

dark:{
    fontSize:12,
    color:theme.palette.primary.gray
  },

navbar:{
    width:'100%',
    height:'10vh',
    background:'#fff',
    borderBottom:`1px solid ${theme.palette.primary.lightgray}`,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
},

grid:{
    background:theme.palette.primary.dashboardBackground,
    width:'100vw',
    minHeight:'100vh'
}


})


export default withRouter(withStyles(styles)(MDashboard))
