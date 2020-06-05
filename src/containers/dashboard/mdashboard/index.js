import React,{useState} from 'react'
import {withStyles,makeStyles} from '@material-ui/core/styles'
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
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'

const BootstrapTooltip=withStyles((theme)=>({
    arrow: {
        color:'#fff',
        fontSize:10,
      },
      tooltip: {
        marginRight:30,
        backgroundColor: '#fff',
        border:`1px solid ${theme.palette.primary.lightgray}`
      },
}))(Tooltip)






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

const [loc,setLoc] = useState(0)

const [day,setDay] = useState(0)

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


<BootstrapTooltip 
TransitionComponent={Fade} 
TransitionProps={{ timeout: 600 }} 
title={
    <React.Fragment>
            <Typography 
            style={{
            textAlign:'end',
            fontSize:14
            }}
             color="primary" >
                 Watch video on   
            </Typography>

            <Typography
            className={classes.dark}
            style={{textAlign:'end'}}
            >
                 How to build your store?
            </Typography>

    {/* <ChangeHistoryIcon
    style={{
        position:'relative',
        right:'1rem',
        bottom:'4rem',
        fontSize:20
    }}
    className={classes.light}
    /> */}

    </React.Fragment>
} 
leaveDelay={2000}
enterTouchDelay={10}
arrow
>
<IconButton color="primary" >
<PlayCircleOutlineIcon/>
</IconButton>
</BootstrapTooltip>





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

<Select
value={loc}
className={classes.select}
onChange={e=>{
    setLoc(e.target.value)
}}
inputProps={{
classes:{
    icon:classes.icon
}
}}
>
<MenuItem value={0} >
<Typography className={classes.dark} >
Location 1
</Typography>
</MenuItem>
<MenuItem value={2} >
<Typography className={classes.dark} >
Location 2
</Typography>
</MenuItem>
<MenuItem value={3} >
<Typography className={classes.dark} >
Location 3
</Typography>
</MenuItem>
</Select>




<Select
onChange={e=>{
    setDay(e.target.value)
}}
value={day}
className={classes.select}
inputProps={{
classes:{
    icon:classes.icon
}
}}
>
<MenuItem value={0} >
<Typography className={classes.dark} >
Yesterday
</Typography>
</MenuItem>
<MenuItem value={2} >
<Typography className={classes.dark} >
Today
</Typography>
</MenuItem>
<MenuItem value={3} >
<Typography className={classes.dark} >
Sunday
</Typography>
</MenuItem>
</Select>

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

icon:{
fill:theme.palette.primary.main,
marginBottom:5
},

select:{
backgroundColor:theme.palette.primary.dashboardBackground,
border:'none',
'&:before':{
    border:'none'
},
'&:after':{
    border:'none'
}

},

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
