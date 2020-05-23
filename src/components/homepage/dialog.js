import React,{useState,useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {FormDialogContext} from '../../App'
import IconButton from '@material-ui/core/IconButton'
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/container'
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/typography'

const FormDialog=({classes})=> {



const {display,toggleFormDisplay}=useContext(FormDialogContext)

  return (

  

      <Dialog open={!display}    >
   
         

   <IconButton className={classes.clear} onClick={toggleFormDisplay} color="primary">
            
            <ClearIcon style={{color:'#515151'}}/>
            
                      </IconButton>

<Container className={classes.form}>


<Typography variant="h5" style={{fontWeight: 'bold',textAlign: 'center',marginBottom:'10vh'}}>
    Welcome Back
</Typography>


<Typography component="div" style={{textTransform: 'uppercase',color:'#999',marginLeft:'2vw'}}>
    <Typography variant="p">
    Email
    </Typography>
<br/>
   <input
     type="email"
     style={{
         width:'90%',
         height:'6vh',
         borderRadius:7,
         border:'2px solid #eee',
         margin:'10px 0',
     }}
     
   />
       

</Typography>




<Typography component="div" style={{textTransform: 'uppercase',color:'#999',marginLeft:'2vw',marginTop:'2vh'}}>
    <Typography variant="p">
    Password
    </Typography>
<br/>
   <input
     type="password"
     style={{
         width:'90%',
         height:'6vh',
         borderRadius:7,
         border:'2px solid #eee',
         margin:'10px 0',
     }}
     
   />
       

</Typography>


<Typography component="p"
style={{
textAlign:'end',
margin:'10px 2.7vw',
fontWeight: 'bold'
}}
color="primary">

Forgot Password?

</Typography>


<Button className={classes.btn} variant="contained" color="primary" disableElevation>
  Login
</Button>


<Typography component="div" style={{display:'flex',justifyContent:'center',marginTop:20}} >

<Typography as="h6" style={{color:'#333',fontWeight: 'bold'}}>
    Don't have an account?{' '}
</Typography>

<Typography as="h6" color="primary" style={{fontWeight:'bold',marginLeft:5,cursor:'pointer'}}>
    Sign Up
</Typography>

</Typography>

          </Container>

          

         
       
      </Dialog>
  );
}

const styles=theme=>({

form:{
    width:'28vw',
    height:'80vh',
    background:'white',
    display:'flex',
    flexDirection:'column',
    // alignItems:'center',
    justifyContent:'center'


},
clear:{
    color:'#515151',
    background:'#eee',
    padding:5,
    position:'absolute',
    left:'26vw',
    zIndex:1,
    '&:hover':{
        'background':'#eee'
    }
},
btn:{
    width:'70%',
    height:'6.5vh',
    margin:'5px auto',
    borderRadius:20,
    fontWeight: 'bold',
    '&:hover':{
        background:theme.palette.primary.main
    }
}

})

export default withStyles(styles)(FormDialog)