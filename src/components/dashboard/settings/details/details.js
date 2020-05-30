import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {withRouter} from 'react-router-dom'
import Btn from '../../../general/button'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Details = ({classes,history}) => {



return (
       
<Grid lg={9} className={classes.form} style={{position: 'relative',left:'2vw'}} >

<Paper className={classes.form} >

<Grid className={classes.inputsCont}>

<Typography style={{position: 'relative',bottom:'3vh'}}>
    Account Details
</Typography>    

<label className={classes.label}>
 NAME
</label>

<input
type="text"
placeholder="Azaa"
className={classes.txtInput}
/>


<label className={classes.label}>
 PHONE NUMBER
</label>

<input
type="tel"
placeholder="+965 4567 356"
className={classes.txtInput}
/>

<label className={classes.label}>
 EMAIL
</label>

<input
type="email"
placeholder="azaa@gmail.com"
className={classes.txtInput}
/>

<label className={classes.label}>
   STORE NAME
</label>

<input
type="text"
placeholder="Azaa"
className={classes.txtInput}
/>

<label className={classes.label}>
 STORE NAME IN ARABIC
</label>

<input
type="text"
className={classes.txtInput}
/>

<label className={classes.label}>
CATEGORY
</label>

        <Select
          value={1}
        //   onChange={handleChange}
         className={classes.select}
         label="Age"
         placeholder="Clothes"
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


<Btn
onClick={()=>history.push('/dashboard/settings/details/edit')}
style={{
    borderRadius:'0px'
}}
>
Change Password
</Btn>



<Btn
>
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
height:'100vh',
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
    height:'110vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
},

form:{
    height:'95vh',
    width:'55vw',
    // marginLeft:'2vw',
    display:'flex'
}

})


export default withRouter(withStyles(styles)(Details))