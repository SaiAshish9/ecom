import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import Button from '../../../general/button'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {withRouter} from 'react-router-dom'

const DomainDesc = ({classes,history}) => {


return (
<Grid lg={9} className={classes.grid}  >

<Paper className={classes.form} >


<Grid style={{margin:'7vh -10px',marginTop:0,display:'flex',alignItems:'center'}}  >
<IconButton
onClick={
    ()=>history.push('/dashboard/store/domain')
}
>
<ArrowBackIcon/>
</IconButton>

   <Typography className={classes.logoTxt}>
  Primary Domain
   </Typography>
</Grid>

<Paper
style={{width:'90%',height:'20vh'}}
onClick={()=>history.push('/dashboard/store/domain/edit')}
className={classes.paper}>
<Grid className={classes.grid1}>
<Typography style={{fontSize:20}} className={classes.logoTxt}>
   Primary Domain
   </Typography>
<Chip className={classes.chip}  color="primary"  label="Connected" />
</Grid>


<Grid className={classes.grid3}>

<Grid>
    
<Typography className={classes.light}>
DOMAIN NAME
</Typography>

<Typography className={classes.dark}>
    salim-store.ecom.com
</Typography>
</Grid>

<Grid>
<Typography className={classes.light}>
RENEWED ON
</Typography>

<Typography className={classes.dark}>
    Januray 7, 2020
</Typography>
</Grid>


<Grid>
<Typography className={classes.light}>
PROVIDER
</Typography>

<Typography className={classes.dark}>
Ecom
</Typography>
</Grid>

    
</Grid>
</Paper>




<Grid className={classes.desc}>

<Grid style={{justifyContent:'space-around'}} className={classes.descPart}>

<Typography className={classes.logoTxt}>
   DNS
</Typography>


<Typography style={{marginBottom:'20px'}} className={classes.light}>
Name Servers
</Typography>

<Paper
style={{width:'100%',height:'20vh'}}
onClick={()=>history.push('/dashboard/store/domain/edit')}
className={classes.paper}>
<Grid style={{alignItems: 'center'}} className={classes.grid1}>
<Typography style={{fontSize:15}} className={classes.logoTxt}>
   Using Custom Name Server
   </Typography>
<Chip className={classes.chip1}  color="primary"  label="change" />
</Grid>
<Grid className={classes.grid3}>
<Grid>
<Typography className={classes.light}>
NAME SERVERS
</Typography>

<Typography className={classes.dark}>
    ed5.ecom.456
</Typography>
<Typography className={classes.dark}>
    ed5.ecom.345
</Typography>
</Grid>
    
</Grid>
</Paper>


<Typography style={{marginBottom:'20px'}} className={classes.light}>
Records
</Typography>


<Paper
style={{width:'100%',height:'10vh'}}
onClick={()=>history.push('/dashboard/store/domain/edit')}
className={classes.paper}>

<Grid className={classes.grid3}>
<Grid>


<Typography className={classes.dark}>
    ed5.ecom.456
</Typography>
<Typography className={classes.dark}>
    ed5.ecom.345
</Typography>
</Grid>
    
</Grid>
</Paper>






</Grid>

<Grid style={{position:'relative',left:'3rem'}} className={classes.descPart}>

<Typography className={classes.logoTxt}>
   Manage
</Typography>

<Grid>
<Typography className={classes.light}>
NAME 
</Typography>

<Typography className={classes.dark}>
    John Doe
</Typography>

</Grid>

<Grid>
<Typography className={classes.light}>
ADDRESS
</Typography>

<Typography className={classes.dark}>
    19 Koss Landing
</Typography>

</Grid>
<Grid>
<Typography className={classes.light}>
CONTACT NUMBER
</Typography>

<Typography className={classes.dark}>
    +91234567890
</Typography>

</Grid>

<Grid>
<Typography className={classes.light}>
EMAIL
</Typography>

<Typography className={classes.dark}>
    johndoe@gmail.com
</Typography>

</Grid>

</Grid>

</Grid>








<Button >
    EDIT DOMAIN
</Button>

</Paper>
   </Grid>

    )
}

const styles=theme =>({

desc:{

width:'90%',
height:'60vh',
display:'flex',
justifyContent:'space-between'

},

descPart:{

height:'60vh',
width:'100%',
display:'flex',
flexDirection:'column',
justifyContent:'space-around'

},


light:{
color: theme.palette.primary.lightgray,
fontSize:12,
},
dark:{
color: theme.palette.primary.gray
},

chip:{
color: theme.palette.primary.green,
background:theme.palette.primary.lightgreen
},
chip1:{
    color: theme.palette.primary.orange,
    background:theme.palette.primary.lightOrange
    },
grid3:{
display:'flex',
justifyContent:'space-between'
},

paper:{
width:'45%',
height:'28vh',
border:'1px solid #eee',
padding:20,
display:'flex',
flexDirection:'column',
justifyContent:'space-between',
marginRight:20,
position:'relative',
bottom:'5vh'
},

left:{
display:'flex',
justifyContent:'space-between'
},
icon:{
color: theme.palette.primary.lightgray,
fontSize:18
},
    grid1:{
width:'100%',
display:'flex',
justifyContent:'space-between'
    },
    logoTxt:{
    color: theme.palette.primary.gray
    },
    preferred:{
        color: theme.palette.primary.lightgray,
        fontSize:12
    },
    form:{
        minHeight:'75vh',
        width:'55vw',
        marginLeft:'2vw',
        padding:'2rem',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-between'
        },
    plus:{
      height:25,
      padding:5,
      width:25,
      borderRadius:'50%',
      fontSize:10,
      background:theme.palette.primary.main,
      border:`2px solid ${theme.palette.background.paper}`

    },
    plus1:{
        position:'absolute',
        left:'35%',
        top:'25%',
        height:100,
        padding:25,
        width:100,
        color:'white',
        borderRadius:'50%',
        fontSize:30,
        background:theme.palette.primary.main,
        border:`2px solid ${theme.palette.background.paper}`
    },
    iconBtn:{

    }
})


export default withRouter(withStyles(styles)(DomainDesc))
