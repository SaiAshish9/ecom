import React from 'react'
import Paper from '@material-ui/core/Paper'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

const Navbar = ({classes}) => {
    return (
        <React.Fragment>
       <Paper variant="outlined"
        className={classes.nav}
        >


<Grid className={classes.grid} >

<Grid style={{marginLeft:'2rem'}}>
<Typography style={{color:'#989b9f'}} variant="h6" >
  
  <LocalMallIcon color="primary" style={{position:'relative',top:'3px',marginRight:'5px'}} />

  ecom
    </Typography>    
</Grid>


<Grid className={classes.rightStrip} >

<Button 
type="submit"
className={classes.btn} variant="contained" color="primary" disableElevation>
  <VisibilityIcon style={{fontSize:'2.5vh',marginRight:5}}/>
  View
</Button>

<Badge color="primary" variant="dot" style={{margin:'0 7px'}}  >
        <NotificationsNoneIcon style={{color:'#565a61',cursor:'pointer'}} />
      </Badge>

<IconButton style={{background:'#dae1ee',margin:'0 10px'}}>
<FingerprintIcon style={{color:'#565a61',cursor:'pointer',fontSize:'17px'}} />
</IconButton>

<Typography style={{color:'#686b73'}}>
    Salim Store
</Typography>


</Grid>


</Grid>



       </Paper>
        </React.Fragment>
    )
}


const styles=theme=>({
    nav:{
        width: '100vw',
        height: '9vh'
    },
    grid:{
        height: '9vh',
        width: '100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    btn:{
        width:'5.5rem',
        height:'5vh',
        margin:10,
        padding:'0 10px',
        textTransform:'none',
        borderRadius:20,
        fontWeight: 'bold',
        '&:hover':{
            background:theme.palette.primary.main
        }
    },
    rightStrip:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:'2.5rem'
    }

})


export default withStyles(styles)(Navbar)
