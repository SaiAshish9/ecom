import React,{useState} from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {withRouter} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '../../general/button'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import CloseIcon from '@material-ui/icons/Close';
import TextField from '../../general/input'
import Divider from '@material-ui/core/Divider'

const ProductsDesc = ({classes,history}) => {

    const [file,setFile]=useState(null)

    const handleChange=e=>{
        var file=e.target.files[0]
        var reader=new FileReader()
        reader.onload=e=>{
            setFile(reader.result)        
        }
        reader.readAsDataURL(file)
    }

    return (
      <Grid className={classes.grid} >
     
     <Grid style={{display:'flex',alignItems:'center',width:'80vw'}}>

     <Grid style={{display:'flex',alignItems:'center',width:'100%'}}>

      <IconButton 
onClick={e=>{
    e.preventDefault()
    // history.goBack()
    history.push('/dashboard/product')
}}
>
            <ArrowBackIosIcon style={{ fontSize:20 }} />
            </IconButton>
            <Typography className={classes.dark}>
            Add New Product
            </Typography>

            </Grid>


<Button
style={{
    borderRadius:0
}}
disabled={true}
>
    Save
</Button>

     </Grid>




<Paper className={classes.form} > 

<Grid className={classes.grid1}>


<input accept="image/*"
onChange={e=>handleChange(e)}
style={{display:'none'}} id="icon-button-file" type="file" />

<label htmlFor="icon-button-file">

<Paper elevation={0} className={classes.upload}>

<CameraAltIcon className={classes.camera}/>

</Paper>

</label>


<Grid style={{position:'relative',bottom:'10vh'}}>

<Badge
overlap="circle"
anchorOrigin={{
  vertical: 'top',
  horizontal: 'right',
}}
badgeContent={
<CloseIcon className={classes.icon} />
}
>
<Avatar
src="https://www.nivea.in/-/media/local/in/boday_page/3_banner_3080x806.png?rx=626&ry=0&rw=2063&rh=806" variant="rounded" 
className={classes.avatar}  />
</Badge>



{
    file&&(

<Badge
overlap="circle"
anchorOrigin={{
  vertical: 'top',
  horizontal: 'right',
}}
badgeContent={
<CloseIcon className={classes.icon} />
}
>
<Avatar
src={file} variant="rounded" 
className={classes.avatar}  />      
</Badge>

    )
}


</Grid>

</Grid>

<Grid className={classes.grid2}>

<TextField
type="text"
label="PRODUCT NAME"
placeholder="100- Wood Beads "
/>

<TextField
type="text"
rows={7}
label="ADD DESCRIPTION"
placeholder="Write here..."
/>


<TextField
type="text"
label="PRICE[OPTIONAL]"
placeholder="10.00 KWD"
/>


<TextField
type="text"
select={true}
label="CATEGORY"
/>

</Grid>

<Grid style={{height:'50vh'}} className={classes.grid2}> 

<TextField
type="text"
label="NAME IN ARABIC"
placeholder="عربى"
/>

<TextField
type="text"
label="QUANTITY"
placeholder="Add Quantity"
/>

<TextField
type="text"
label="WEIGHT"
placeholder="1kg"
/>


</Grid>

</Paper>



<Paper className={classes.form1} > 

<Grid style={{ display:'flex',alignItems:'center',justifyContent:'space-between',width:'50%' }} >


<Typography variant="h5" component="h5">
    Options
</Typography>

<Divider orientation="vertical"  flexItem />


<Typography className={classes.label} >
You can add options like color,size,extra,special requests etc to the product
</Typography>


</Grid>

<Grid>


<Button
style={{
    borderRadius:5,
    fontSize:12
}}
>
    SAVE OPTIONS 
</Button>

<Button
style={{
    borderRadius:5,
    fontSize:12
}}
>
    CREATE NEW OPTION 
</Button>

</Grid>


</Paper>

        </Grid>
    )
}


const styles=theme=>({

label:{
color:theme.palette.primary.lightgray,
fontSize:12
},

icon:{
    backgroundColor: theme.palette.primary.dashboardBackground,
    borderRadius:'50%',
    color: theme.palette.primary.gray,
    padding:5,
    position:'relative',
    // left:10,
    bottom:10,
    cursor: 'pointer'
},

avatar:{
height:'5rem',
width:'5rem',
margin:'0 20px'
},

camera:{
color: theme.palette.primary.orange,
fontSize:'2rem'
},

form:{
width:'100%',
height:'75vh',
marginTop:'5vh',
padding:'2rem',
display:'flex'
},

form1:{
width:'100%',
height:'15vh',
marginTop:'3vh',
padding:'2rem',
alignItems:'center',
display:'flex',
justifyContent:'space-between'
},

upload:{
cursor:'pointer',
display:'flex',
alignItems:'center',
justifyContent:'center',
height:'30vh',
width:'90%',
border:`1px solid ${theme.palette.primary.orange} `,
background:theme.palette.primary.lightOrange
},


grid1:{
width:'30%',
height:'75vh',
display:'flex',
// alignItems:'center',
flexDirection:'column',
justifyContent:'space-around'
},

grid2:{
    width:'30%',
    height:'65vh',
    display:'flex',
    margin:20,
    flexDirection:'column',
    justifyContent:'space-around'
},



grid:{
    padding:'4rem'
},
dark:{
    color:theme.palette.primary.gray
}
})

export default withRouter(withStyles(styles)(ProductsDesc))
