import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '../../../general/button'

import {withRouter} from 'react-router-dom'

const Locations = ({classes,history}) => {


return (
<Grid lg={9} className={classes.grid}  >

<Paper className={classes.form} >
<Grid style={{display:'flex',flexWrap: 'wrap',marginBottom:'5vh'}}>
<Paper
onClick={()=>history.push('/dashboard/store/locations/edit')}
elevation={0} className={classes.paper} style={{cursor:'pointer'}}>
<Grid className={classes.grid1}>

<Typography
style={{fontSize:20}} className={classes.logoTxt}>
Burger King   
</Typography>

</Grid>
</Paper>
</Grid>


<Button >
    Add Store
</Button>

</Paper>
   </Grid>

    )
}

const styles=theme =>({


paper:{
width:'40%',
height:'10vh',
border:'1px solid #eee',
padding:20,
display:'flex',
flexDirection:'column',
justifyContent:'center',
marginRight:20,
color:theme.palette.primary.gray,
},



    form:{
        minHeight:'75vh',
        width:'55vw',
        marginLeft:'2vw',
        padding:'2rem',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-between'
        }
})


export default withRouter(withStyles(styles)(Locations))
