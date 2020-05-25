import React,{useState,useContext,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {FormDialogContext} from '../../contexts/FormDialog'
import IconButton from '@material-ui/core/IconButton'
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container'
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import {withRouter} from 'react-router-dom'


const FormDialog=({classes,width,history})=> {


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    const [small,setSmall]=useState(false)

useEffect(()=>{
    if(isWidthDown('xs',width)){
        setSmall(true)
    }else{
        setSmall(false)
    }
},[width])


    const {display,toggleFormDisplay}=useContext(FormDialogContext)

  return (

  

      <Dialog fullScreen={small && true}
      disableBackdropClick={true}  maxWidth='sm' 
      open={display}    >
   
         

   <IconButton className={classes.clear} onClick={toggleFormDisplay} color="primary">
            
            <ClearIcon style={{color:'#515151'}}/>
            
                      </IconButton>

<Container className={classes.form}>


<Typography variant="h5" style={{
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:'10vh',
    marginRight:'2rem'}}>
    Welcome Back
</Typography>

<form

onSubmit={e=>{
    e.preventDefault()
    console.log(email,password)
    setEmail('')
    setPassword('')
    history.push('/dashboard')
    toggleFormDisplay()
}}
>


<Typography component="div" style={{textTransform: 'uppercase',color:'#999',marginLeft:'2vw'}}>
    <Typography className={classes.label}  component="p">
    Email
    </Typography>
<br/>
   <input
     type="email"
     className={classes.input}
     value={email}
     onChange={e=>setEmail(e.target.value)}
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
    <Typography className={classes.label} component="p">
    Password
    </Typography>
<br/>
   <input
    className={classes.input}
     type="password"
     value={password}
     onChange={e=>{
         setPassword(e.target.value)
        }}
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
margin:'10px 0',
fontWeight: 'bold'
}}
className={classes.forgot}
color="primary">

Forgot Password?

</Typography>


<Button 
type="submit"
className={classes.btn} variant="contained" color="primary" disableElevation>
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

</form>


          </Container>

          

         
       
      </Dialog>
  );
}

const styles=theme=>({

form:{
    width:'28vw',
    height:'80vh',
    minWidth:'27rem',
    background:'white',
    display:'flex',
    flexDirection:'column',
    // alignItems:'center',
    justifyContent:'center',
    [theme.breakpoints.down('sm')]:{
        maxWidth:'3rem',
        height:'70vh',
        marginTop:'10vh'
    }
},

input:{

outline:'none',
color:'#999',
[theme.breakpoints.down('sm')]:{
width:'70% !important',
margin:'10px 20px !important'
}

},
forgot:{
    [theme.breakpoints.down('xs')]:{
        textAlign:'center !important',

    }
},
label:{

    
marginLeft:'20px'
},
clear:{
    color:'#515151',
    background:'#eee',
    padding:5,
    position:'absolute',
    right:'0vw',
    zIndex:1,
    '&:hover':{
        'background':'#eee'
    },
    [theme.breakpoints.down('xs')]:{
        position:'absolute',
        right:'6vw'
    }
},
btn:{
    width:'70%',
    height:'6.5vh',
    margin:'7px 12%',
    borderRadius:20,
    fontWeight: 'bold',
    '&:hover':{
        background:theme.palette.primary.main
    }
}

})

export default withRouter(withWidth()(withStyles(styles)(FormDialog)))