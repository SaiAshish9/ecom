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

  

const Products = ({classes,history}) => {



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
    history.location.pathname !== '/dashboard/product/categories' ? classes.lightgray : classes.black
}
>
Categories
{
history.location.pathname ==='/dashboard/product/categories' && (
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
    history.push('/dashboard/product/options')
}}
style={{cursor:'pointer'}}
className={
    history.location.pathname !=='/dashboard/product/options' ? classes.lightgray : classes.black
}
>
Options
{
history.location.pathname ==='/dashboard/product/options' && (
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
<Button
onClick={()=>{
    history.push('/dashboard/product/products/edit')
}}
style={{
    fontSize:12,
    borderRadius:'0px'
}}
>
Add New
</Button>
</Grid>
</Paper>

<TableContainer style={{marginTop:'5vh'}} component={Paper} >

    <Table>
        <TableHead>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">PRODUCT NAME</StyledTableCell>
            <StyledTableCell align="right">IMAGE</StyledTableCell>
            <StyledTableCell align="right">CATEGORY</StyledTableCell>
            <StyledTableCell align="right">PIECES</StyledTableCell>
            <StyledTableCell align="center">PRICE</StyledTableCell>
            <StyledTableCell align="center">STATUS</StyledTableCell>
        </TableHead>

        <TableBody>

{
    [...Array(5).keys()].map((i,k)=>(
        <StyledTableRow key={k} >
        <StyledTableCell component="th" scope="row"> 011 </StyledTableCell>
        <StyledTableCell align="right">Wood Beads</StyledTableCell>
        <StyledTableCell align="right">
            <Avatar style={{marginLeft:'90%'}} variant="rounded" src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png" />
        </StyledTableCell>
        <StyledTableCell align="right">Tops</StyledTableCell>
        <StyledTableCell align="right">56</StyledTableCell>
        <StyledTableCell align="right">
        <p style={{height:'2vh'}} >
        $55 {' '} [-10%] 
        <span style={{color:'#000'}}>
        {' '}{' '} $45
        </span>       
        </p>

         </StyledTableCell>
        <StyledTableCell align="right">
            
            <Grid style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>

{
    k%2===0?(
<Typography  className={classes.green}>
Active
</Typography>
    ):(
<Typography style={{textAlign:'start',width:'2rem'}} className={classes.orange}>
Inactive
</Typography>
    )
}
<Grid style={{textAlign:'end',width:'2rem'}}>

<IconButton
style={{ position:'relative',right:k%2===0&&4 }}
>

<DeleteOutlineIcon
className={classes.label}
/>

</IconButton>

</Grid>

<Switch
color="primary"
checked={k%2===0}
/>
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
}

})

export default withRouter(withStyles(styles)(Products))
