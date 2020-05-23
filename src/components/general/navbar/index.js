import React,{useContext} from 'react'
import Typography from '@material-ui/core/typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'

import {FormDialogContext} from '../../../App'




const Navbar = ({classes}) => {

const {display,toggleFormDisplay}=useContext(FormDialogContext)


const links=[
    {
        link:'Home'
    },
    {
        link:'Pricing'
    },
    {
        link:'Features'
    }
]


    return (
      
  

<Typography className={classes.nav} component="div" >
            
<Typography variant="h3" style={{fontWeight: 'bold'}} >
    ecom

</Typography>

<Typography  component="div" className={classes.link} >


{
    links.map((i,k)=>(
<Typography 
key={k}
className={classes.h6} variant="h6"  >
    {i.link}

</Typography>
    ))

}





</Typography>

<Typography  component="div" className={classes.link} >




<Button className={classes.button} style={{marginRight:7}} 
disableElevation 
onClick={ toggleFormDisplay}
>
    Login
</Button>



<Button className={classes.button} disabled >
    Sign Up
</Button>

</Typography>

        </Typography>

       
    )
}

const styles=theme=>({
    nav:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        color:'white',
        paddingTop:'1vh'
        },
    link:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
        },
    h6:{
        fontWeight: 'bold',
        marginRight:'5vw',
        fontSize:16,
        cursor:'pointer',   
        [theme.breakpoints.down('md')]:{
            display:'none'
        }
    },
    button:{
        borderRadius:20,
        border:'2px solid white',
        color:'white',
        fontWeight: 'bold',
        textTransform:'none',
        height:'3rem',
        width:'8rem',
        '&:hover':{
            boxShadow:'none'
        },
        '&:focus':{
            boxShadow:'none'
        },
        '&:active':{
            boxShadow:'none'
        }

    }
}) 


export default withStyles(styles)(Navbar)
