import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'


const Btn = ({classes,children}) => {
    return (
<Button 
type="submit"
className={classes.btn} variant="contained" color="primary" disableElevation>
  {children}
</Button>
    )
}

const styles=theme =>({
    btn:{
        width:'12rem',
        height:'6vh',
        margin:10,
        padding:'0 10px',
        textTransform:'none',
        borderRadius:20,
        fontWeight: 'bold',
        '&:hover':{
            background:theme.palette.primary.main
        }
    }
})

export default withStyles(styles)(Btn)
