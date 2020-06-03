import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const Input = ({select,rows,classes,placeholder,type,label,style}) => {
    
    return (
        <Grid style={{display: 'flex',flexDirection: 'column'}}>
<label style={{marginBottom:10}} className={classes.label}>
{label}
</label>
{
    rows?(
<textArea
rows={rows}
style={{...style}}
cols={7}
placeholder={placeholder}
style={{height:'7rem'}}
className={classes.txtInput}
/>

    ):!select && (
<input
type={type}
style={{...style}}
placeholder={placeholder}
className={classes.txtInput}
/>
    )
}

{
    select && (
        <Select
        value={1}
      //   onChange={handleChange}
       className={classes.select}
       label="Age"
       placeholder="Clothes"
       variant="outlined"
      margin="normal"

      >
        <MenuItem style={{fontSize:12,border:'none'}} value={1}>
          Choose Category
        </MenuItem>
        <MenuItem style={{fontSize:12}}  value={10}>Ten</MenuItem>
        <MenuItem style={{fontSize:12}}  value={20}>Twenty</MenuItem>
        <MenuItem style={{fontSize:12}}  value={30}>Thirty</MenuItem>
      </Select>
    )
}


        </Grid>

    )

}

const styles =theme =>({


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


txtInput:{ 
    border:`1px solid ${theme.palette.primary.main} `,
    height:'2.5rem',
    color:theme.palette.primary.gray,
    padding:10,
    '&:focus':{
        border:`1px solid ${theme.palette.primary.main} `,
    },
    '&::placeholder':{
        color:theme.palette.primary.gray,
        fontWeight:'bold'
    }
    },
    label:{
        marginBottom:20,
        color:theme.palette.primary.lightgray
    },
})


export default withStyles(styles)(Input)
