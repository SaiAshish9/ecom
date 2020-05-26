import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import {withRouter} from 'react-router-dom'
import Btn from '../../general/button'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Avatar from '@material-ui/core/Avatar'
import CheckIcon from '@material-ui/icons/Check';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Payment = ({classes}) => {

const [checked,setChecked]=useState(false)
    
const [file,setFile]=useState(null)

const handleChange=e=>{
    var file=e.target.files[0]
    var reader=new FileReader()
    // reader.readAsText(file)
    reader.onload=e=>{
        setFile(reader.result)        
    }
    reader.readAsDataURL(file)
}


return (
       
<Grid lg={9} className={classes.form} style={{position: 'relative',left:'2vw'}} >

<Paper className={classes.form} >


<Grid className={classes.inputsCont}>
    

<label className={classes.label}>
ACCOUNT HOLDER NAME
</label>

<input
type="text"
placeholder="100- Wood Beeds"
className={classes.txtInput}
/>

<label className={classes.label}>
BANK NAME
</label>

{/* <input
type="text"
placeholder="Clothes"
className={classes.txtInput}
/>  */}




        <Select
        //   value={1}
        //   onChange={handleChange}
         className={classes.select}
         label="Age"
        //  placeholder="Clothes"
        //  borderColor="primary.main"
         variant="outlined"
        // InputProps={{
        //     classes: {
        //       notchedOutline: classes.select
        //     }
        //   }}
        margin="normal"

        >
          <MenuItem style={{fontSize:12,border:'none'}} value={1}>
            Clothes
          </MenuItem>
          <MenuItem style={{fontSize:12}}  value={10}>Ten</MenuItem>
          <MenuItem style={{fontSize:12}}  value={20}>Twenty</MenuItem>
          <MenuItem style={{fontSize:12}}  value={30}>Thirty</MenuItem>
        </Select>
 





<label className={classes.label}>
IBAN NUMBER
</label>

<input
type="text"
placeholder="Description about the shop..."
className={classes.txtInput}
/>

<label className={classes.label}>
ACCOUNT NUMBER
</label>

<input
type="text"
placeholder="+91 123456789"
className={classes.txtInput}
rows={7}
/>


<Grid  style={{display:'flex',justifyContent:'space-between'}} >


<Paper variant="outlined"
className={classes.uploadPaper}
>
    <Grid style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}
>

<Grid>

<input accept="image/*"
onChange={e=>handleChange(e)}
style={{display:'none'}} id="icon-button-file" type="file" />

<label htmlFor="icon-button-file">
<IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
        </label>



<Typography className={classes.upload}> 
    Upload
</Typography>

</Grid>

<Grid style={{height:'12vh',display:'flex',justifyContent:'center',flexDirection:'column'}}>
    <Typography style={{margin:'10px 0',fontSize:12}}>
        Civil ID
    </Typography>
    <Typography style={{fontSize:12}}>
        Bussiness ID
    </Typography>

</Grid>


    </Grid>


</Paper>



<Avatar
src={file ? file :"https://static.toiimg.com/photo/59385796.cms"}
variant="rounded" className={classes.rounded}>
</Avatar>

</Grid>

<Grid style={{display:'flex',alignItems:'center'}}>

{
    checked?(
<IconButton className={classes.iconBtn}
onClick={()=>setChecked(false)}
>
<CheckIcon style={{fontSize:12,fontWeight: 'bold'}} />
</IconButton>        
    ):(
<IconButton
onClick={()=>setChecked(true)}
className={classes.iconBtn1}>
</IconButton>
    )
}








<p className={classes.label} style={{fontSize:12}}>
I agree with  

<span className={classes.span} style={{fontSize:15}}>
Terms & Conditions
</span>

of Ecom.
</p>


</Grid>



<Btn>
Save Changes
</Btn>

</Grid>




</Paper>


</Grid>

    )
}



const styles =theme=>({
    notchedOutline: {
        borderWidth: "1px",
        borderColor:`${theme.palette.primary.main} !important`,

    },
 
select:{
    fontSize:12,
    padding:'0px',
    border:`1px solid ${theme.palette.primary.main} `,
    height:'2.5rem',
    outline:'none !important',
    '&:before': {
        height:0
    },
    color:theme.palette.primary.gray,
    marginBottom:15,
    '&:focus':{
        border:`1px solid ${theme.palette.primary.main} `,
    },
    '&::placeholder':{
        color:theme.palette.primary.gray,
        fontWeight:'bold'
    }

},


iconBtn:{
color:'#000',
padding:5,
marginRight:10,
background:theme.palette.primary.main,
'&:hover':{
    background:theme.palette.primary.main,
    color:'#000'
}
},

iconBtn1:{
    padding:9,
    marginRight:10,

    border:`2px solid ${theme.palette.primary.main}`,
    '&:hover':{
        border:`2px solid ${theme.palette.primary.main}`,
    }
    },

span:{
color:theme.palette.primary.gray,
margin:'0 5px'
},

rounded:{
width:'30%',
height:'14vh',
marginRight:5
},

upload:{
  color:theme.palette.primary.gray  
},

uploadPaper:{
height:'14vh',
width:'65%',
background:'#f8f9fb'
},

txtInput:{ 
    border:`1px solid ${theme.palette.primary.main} `,
    height:'2.5rem',
    color:theme.palette.primary.gray,
    marginBottom:15,
    padding:10,
    '&:focus':{
        border:`1px solid ${theme.palette.primary.main} `,
    },
    '&::placeholder':{
        color:theme.palette.primary.gray,
        fontWeight:'bold'
    }
    },
inputsCont:{
display:'flex',
height:'77vh',
width:'50%',
flexDirection:'column',
justifyContent:'space-around',
padding:'3rem'
},
label:{
color:theme.palette.primary.lightgray,
fontSize:12
},
main:{
    display:'flex',
},

typo:{
    color:theme.palette.primary.gray,
    fontSize:'1.2rem'
},
container:{
    padding:'3rem'
},
grid:{
    height:'77vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
},

form:{
    height:'75vh',
    width:'55vw',
    // marginLeft:'2vw',
    display:'flex'
}

})


export default withRouter(withStyles(styles)(Payment))