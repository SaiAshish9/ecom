import React,{useState,createContext} from 'react';
import './App.css';

import Typography from '@material-ui/core/Typography'
import withStyles from "@material-ui/core/styles/withStyles";
import Navbar from './components/general/navbar'
import Grid from '@material-ui/core/Grid';
import FormDialog from './components/homepage/dialog'


export const FormDialogContext=createContext(null)


const App=({classes})=> {

  const [display,setDisplay]=useState(false)


  return (
<>
    <FormDialogContext.Provider
    value={{
      display,
      toggleFormDisplay:()=>setDisplay(!display)
    }}
    >

<Typography component='div' className={classes.home} >

<Navbar />


<Grid container  style={{width: '100vw',height:'90vh'}} >

<Grid item  xs={12} sm={12} lg={5}  style={{minHeight:'50vh',display: 'flex',marginLeft:'8vw',justifyContent:'center',flexDirection:'column'}}  component="div"  >


<Typography variant="h3" style={{color:'white'}}> 

Sell online with ecom

</Typography>


<Typography variant="h5" style={{color:'white',marginTop:10}}> 



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat lorem vel aliquet viverra.

</Typography>

</Grid>


<Grid item  xs={12} sm={12} lg={5}  style={{display: 'flex',alignItems: 'center',justifyContent:'center',flexDirection:'column'}}  component="div"  >

<img
src="https://image.freepik.com/free-vector/flat-store-facade-with-awning_23-2147542588.jpg"
alt="img"
style={{
  height:'70vh'
}}
/>

</Grid>

<FormDialog  />

</Grid>




</Typography>


</FormDialogContext.Provider>
</>
);
}


const styles =theme=>({

  home:{
    width: '100vw',
    height:'100vh',
    background:theme.palette.primary.main
  },
  leftContent:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    height:'90vh',
    width:'50vw',
    textAlign:'start'
}
})

export default withStyles(styles)(App);
