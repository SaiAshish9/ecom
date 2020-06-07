import React from 'react'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Button from '../../general/button'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import Search from '../../general/search'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Switch from '@material-ui/core/Switch';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#fff',
      color: theme.palette.primary.lightgray
    },
    body: {
      fontSize: 14,
      color: theme.palette.primary.gray
    },
  }))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  

const Categories = ({classes,history}) => {



return (

       <Grid className={classes.grid} >

<Paper elevation={0} className={classes.paper} >
<Grid className={classes.leftNav}>
<Typography 
onClick={()=>{
    history.push('/dashboard/product')
}}
style={{cursor:'pointer'}}
className={
    history.location.pathname !=='/dashboard/product' ? classes.lightgray : classes.black
}
>
Products
{
history.location.pathname ==='/dashboard/product' && (
<Paper
elevation={0}
className={classes.highlight}
>
</Paper>
)
}
</Typography>
<Typography
onClick={()=>{
    history.push('/dashboard/categories')
}}
style={{cursor:'pointer'}}
className={
    history.location.pathname !== '/dashboard/categories' ? classes.lightgray : classes.black
}
>
Categories
{
history.location.pathname ==='/dashboard/categories' && (
<Paper
elevation={0}
className={classes.highlight}
>
</Paper>
)
}
</Typography>
<Typography
onClick={()=>{
    history.push('/dashboard/categories/options')
}}
style={{cursor:'pointer'}}
className={
    history.location.pathname !=='/dashboard/categories/options' ? classes.lightgray : classes.black
}
>
Options
{
history.location.pathname ==='/dashboard/categories/options' && (
<Paper
elevation={0}
className={classes.highlight}
>
</Paper>
)
}
</Typography>
</Grid>

<Grid style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

<IconButton>
<ImportExportIcon style={{color:'#76b9d0'}}/>
</IconButton>

<Search/>
{/* <Button
onClick={()=>{
    history.push('/dashboard/product/products/edit')
}}
style={{
    fontSize:12,
    borderRadius:'0px'
}}
>
Add New
</Button> */}
</Grid>
</Paper>





<TableContainer style={{marginTop:'5vh'}} component={Paper} >
    <Table>
        <TableHead>
            <StyledTableCell align="right">OPTION NAME</StyledTableCell>
            <StyledTableCell style={{width:'80%'}} align="center">SUB-OPTIONS</StyledTableCell>
        </TableHead>
        <TableBody>

{
    [...Array(5).keys()].map((i,k)=>(
        <StyledTableRow key={k} >
        <StyledTableCell align="right">Wood Beads</StyledTableCell>
        <StyledTableCell 
        style={{display:'flex',
        alignItems:'center',
        paddingLeft:'20%',
        justifyContent:'space-between',
        width:'90%'}} >
           L,M,S,XXL,XL,XXXL
   
            <Grid style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
<Grid style={{textAlign:'end',width:'2rem'}}>

<IconButton
>
<DeleteOutlineIcon
className={classes.label}
/>
</IconButton>
</Grid>

            </Grid>
        </StyledTableCell>
      </StyledTableRow>
    ))
}
        </TableBody>
    </Table>
</TableContainer>



























</Grid>

    )
}

const styles =theme =>({

red:{
fontSize:12,
color:theme.palette.primary.red
},

    green:{
fontSize:12,
color:theme.palette.primary.green
    },

    orange:{
        fontSize:12,
        color:theme.palette.primary.orange
            },
highlight:{

height:6,
borderRadius:0,
width:'3.5rem',
background:theme.palette.primary.main,
position:'relative',
top:'1.6vh'

},

black:{
marginTop:5
},

leftNav:{
  height:'8vh',
  display:'flex',
  alignItems:'center',
  justifyContent:'space-around',
  width:'30%'
},
lightgray:{
    color:theme.palette.primary.lightgray
},
gray:{
    color:theme.palette.primary.gray
},
grid:{
    padding:'5rem'
},
paper:{
    height:'8vh',
    width:'80vw',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
},
info:{
    color:theme.palette.primary.gray,
    fontSize:17,
    margin:'0 10px'
    },
    
})

export default withRouter(withStyles(styles)(Categories))
