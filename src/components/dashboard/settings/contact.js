import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {withRouter} from 'react-router-dom'
import Btn from '../../general/button'


const Contact = ({classes,history}) => {



return (
       
<Grid lg={9} className={classes.form} style={{position: 'relative',left:'2vw'}} >

<Paper className={classes.form} >




<Grid className={classes.inputsCont}>

<Paper elevation={0} className={classes.chat} >

<Grid style={{width: '60%',display: 'flex',justifyContent:'center',flexDirection:'column'}} >

<label className={classes.dark}>
Chat with our customers service now
</label>


<Btn
style={{
    height:'2rem',
    width:'60%',
    margin:'10px 0',
    fontSize:12
}}
>
Start Chart
</Btn>

</Grid>

<img
src="https://www.comporium.com/wp-content/uploads/2016/07/live-chat-icon.png"
alt="x"
style={{
    height:'12vh',
    width:'40%'
}}
/>


</Paper>


<Typography style={{textAlign: 'center'}} className={classes.label}>
    OR
</Typography>

<Typography style={{fontSize:12}} >
Fill out the information below!
</Typography>    

<label className={classes.label}>
NAME
</label>

<input
type="text"
placeholder="Ahmed Ali"
className={classes.txtInput}
/>


<label className={classes.label}>
 EMAIL
</label>

<input
type="email"
placeholder="ahmed@gmail.com"
className={classes.txtInput}
/>

<label className={classes.label}>
PHONE NUMBER
</label>

<input
type="tel"
placeholder="+9765432349"
className={classes.txtInput}
/>

<label className={classes.label}>
WRITE A COMMENT
</label>

<input
type="text"
placeholder="Enter text here..."
className={classes.txtInput}
/>



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
 
dark:{
color:theme.palette.primary.gray
},    

chat:{
background:theme.palette.primary.lightOrange,
width:'100%',
height:'16vh',
display:'flex',
padding:10
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
// height:'80vh',
marginBottom:'10vh',
width:'50%',
flexDirection:'column',
justifyContent:'space-between',
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
    height:'115vh',
    width:'55vw',
    // marginLeft:'2vw',
    display:'flex'
}

})


export default withRouter(withStyles(styles)(Contact))