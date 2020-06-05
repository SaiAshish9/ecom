import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import BagPic from '../../assets/bag.png'
import Button from '../../components/general/button'
import { Typography } from '@material-ui/core'
import {withRouter} from 'react-router-dom'


const AuthMobile = ({classes,history}) => {
    return (
        <Grid className={classes.grid} >
            
<img
src={BagPic}
style={{
width:'15rem',
height:'15rem'
}}
/>

<Grid >

<Button 
onClick={()=>{
    history.push('/signUp')
}}
style={{
    width:'90vw',
    height:'3rem'
}}
>
CREATE YOUR STORE
</Button>

<Grid style={{display:'flex',marginTop:'3vh',width:'100%',justifyContent:'center',alignItems:'center'}} >
    
    <Typography
    className={classes.label}
    >
    Already have a store?
    </Typography>

    <Typography
    color="primary"
    onClick={()=>{
        history.push('/login')
    }}
    style={{
        marginLeft:5
    }}
>
LOGIN
    </Typography>

</Grid>

</Grid>



        </Grid>
    )

}

const styles =theme =>({
grid:{
    height:'100vh',
    width:'100%',
    background:'#fff',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around'
},
label:{
    color:theme.palette.primary.lightgray,
    fontSize:'95%'
}
})


export default withRouter(withStyles(styles)(AuthMobile))
