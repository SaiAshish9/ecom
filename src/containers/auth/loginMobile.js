import React from 'react'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextField from '../../components/general/input'
import Grid from '@material-ui/core/Grid'
import Button from '../../components/general/button'
import useMediaQuery from '@material-ui/core/useMediaQuery' 

const LoginMobile = ({classes,history}) => {

    const mobileSize=useMediaQuery('( max-width:650px )')


    return (
        <Grid className={classes.grid}>
        
<IconButton
onClick={()=>{
    history.push('/')
}}
>
    <ArrowBackIosIcon/>
</IconButton>

<Grid>
<Typography component="h6" variant="h6">
    Welcome,
</Typography>

<Typography className={classes.label}>
    Login to continue
</Typography>
</Grid>


<TextField
label="EMAIL"
type="type"
style={{width:'80vw'}}
placeholder="Azaa@gmail.com"
/>

<TextField
label="PASSWORD"
type="password"
style={{width:'80vw'}}
iconStyle={{
position:'relative',
left:'75%',
bottom:'2.7rem'
}}
/>

<Typography style={{
    alignSelf:'flex-end',
    position:'relative',
    bottom:'1rem'
}}
 className={classes.label}>
FORGOT PASSWORD?
</Typography>

<Button
onClick={()=>{
    history.push('/dashboard')
}}
style={{
    width:'80vw',
    height:'3rem'
}}
>
  LOGIN  
</Button>

        </Grid>
    )
}

const styles =theme =>({

label:{
color:theme.palette.primary.lightgray
},

grid:{
    width:'100vw',
    height:'85vh',
    padding:'8vw',
    alignItems:'flex-start',
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'column'
}

})


export default withRouter(withStyles(styles)(LoginMobile))
