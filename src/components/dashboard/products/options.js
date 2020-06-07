import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import {withRouter} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Check from '../../general/checkbox'
import Btn from '../../general/button'
import Divider from '@material-ui/core/Divider'
import CloseIcon from '@material-ui/icons/Close';
import {BsLink45Deg} from 'react-icons/bs'

import {IoIosInformationCircleOutline} from 'react-icons/io'

const Options = ({classes,history}) => {
    return (


        <Box
        display="flex"
        flexDirection="column"
        >
  
        <Box
        className={classes.box}
        display="flex"
        >
       
       <Box 
       display="flex" 
       flexDirection="column"
       className={classes.box1}
       >
        
        <Paper 
        style={{
            width:'100%',
            height:'16vh'
            }}>
        
        <Box
        display="flex"
        justifyContent="space-between"
        style={{
            width:'100%',
            height:'8vh',
            padding:'0 20px'
        }}
        >




<Box
display="flex"
alignItems="center"
justifyContent="space-between"
style={{width:'60%'}}
>
<Typography 
style={{color:'#000',fontSize:14}}
className={classes.light}>
Enter Name
</Typography>
<Box
display="flex"
alignItems="center"
>
<Typography
style={{fontSize:12,marginRight:5}}
>
Needs Price    
</Typography>    
<Check 
check={true}
/>
</Box>
</Box>
<Divider orientation="vertical"  flexItem />
<Box
display="flex"
alignItems="center"
justifyContent="space-between"
style={{width:'40%',padding:'0 10px'}}
>
<Box
display="flex"
alignItems="center"
>
<Typography
style={{fontSize:12,marginRight:5}}
>
Mandatory
</Typography>    
<Check 
check={true}
/>
</Box>
<ButtonGroup
className={classes.btnGrp}
>
    <Button
    className={classes.btn1}
    >
        Min
    </Button>
    <Button
    className={classes.btn1}
    >
        Max
    </Button>
</ButtonGroup>
</Box>
        </Box>

        <Box
        display="flex"
        alignItems="center"
        className={classes.bg}
        style={{
            width:'100%',
            height:'8vh',
            padding:'10px'
        }}        
        >
<Box 
display="flex"
alignItems="center"
>
<IconButton>
    <AddIcon 
    style={{fontSize:18}}
    className={classes.light}/>
</IconButton>
<Typography className={classes.light}>
Add Something
</Typography>
</Box>
        </Box>
        </Paper>

<Box
display="flex"
justifyContent="flex-end"
>
<Button
className={classes.dark}
style={{
    width:'10rem',
    margin:'10px 0',
    textTransform:'none'
}}
>
   <Typography 
   style={{fontSize:10,display:'flex',alignItems:'center'}}
   className={classes.light}>
   <BsLink45Deg style={{fontSize:16,marginRight:6}}/>
   Link with it
   </Typography>
</Button>
</Box>




<Box
display="flex"
justifyContent="flex-end"
>
<IconButton
className={[classes.bg,classes.br]}
style={{
    position:'relative',
    bottom:'24vh',
    left:'10px',
    padding:2,
    }}
>
    <CloseIcon style={{ fontSize:16,fontWeight:'bold' }}/>
</IconButton>
</Box>







<Paper 
        style={{
            width:'100%',
            height:'30vh'
            }}>
        
        <Box
        display="flex"
        justifyContent="space-between"
        style={{
            width:'100%',
            height:'8vh',
            padding:'0 20px'
        }}
        >




<Box
display="flex"
alignItems="center"
justifyContent="space-between"
style={{width:'80%'}}
>
<Typography 
style={{color:'#000',fontSize:14}}
className={classes.light}>
Color
</Typography>
<Box
display="flex"
alignItems="center"
>
<Typography
style={{fontSize:12,marginRight:5}}
>
Needs Price    
</Typography>    
<Check 
check={true}
/>
</Box>
</Box>
<Divider orientation="vertical"  flexItem />
<Box
display="flex"
alignItems="center"
justifyContent="space-between"
style={{width:'20%',padding:'0 10px'}}
>
<Box
display="flex"
alignItems="center"
>
<Typography
style={{fontSize:12,marginRight:5}}
>
Mandatory
</Typography>    
<Check 
// check={true}
/>
</Box>

</Box>
        </Box>

        <Box
        display="flex"
        alignItems="center"
        className={classes.bg}
        style={{
            width:'100%',
            height:'8vh',
            padding:'10px'
        }}        
        >
<Box 
display="flex"
alignItems="center"
>
<IconButton>
    <AddIcon 
    style={{fontSize:18}}
    className={classes.light}/>
</IconButton>
<Typography className={classes.light}>
Add Something
</Typography>
</Box>
        </Box>

<Box
display="flex"
flexDirection="column"
justifyContent="space-between"
style={{
    height:'14vh',
    padding:'20px'
}}
>

<Typography
className={classes.light}
>
Blue
</Typography>
<Typography
className={classes.light}
>
Black
</Typography>
<Typography
className={classes.light}
>
Brown
</Typography>

</Box>


        </Paper>





        <Box
display="flex"
justifyContent="flex-end"
>
<IconButton
className={[classes.bg,classes.br]}
style={{
    position:'relative',
    bottom:'31vh',
    left:'10px',
    padding:2,
    }}
>
    <CloseIcon style={{ fontSize:16,fontWeight:'bold' }}/>
</IconButton>
</Box>






        <Box
display="flex"
justifyContent="flex-end"
>
<Button
className={classes.lightorange}
style={{
    width:'10rem',
    margin:'1px 0',
    textTransform:'none'
}}
>
   <Typography 
   style={{fontSize:10,display:'flex',alignItems:'center'}}
   className={classes.orange}>
   <BsLink45Deg style={{fontSize:16,marginRight:6}}/>
   Link With Size
   </Typography>
</Button>
</Box>










<Paper 
        style={{
            width:'100%',
            height:'8vh',
            marginTop:'2vh'
            }}>
        
        <Box
        display="flex"
        justifyContent="space-between"
        style={{
            width:'100%',
            height:'8vh',
            padding:'0 20px'
        }}
        >




<Box
display="flex"
alignItems="center"
justifyContent="space-between"
style={{width:'100%'}}
>

<Box
display="flex"
alignItems="center"
 >

<Typography 
style={{color:'#000',fontSize:14}}
className={classes.light}>
Add A TextField
</Typography>

<IconButton
style={{
    fontSize:18,
    margin:2
}}
>
<IoIosInformationCircleOutline/>
</IconButton>


</Box>



</Box>
<Box
display="flex"
alignItems="center"
justifyContent="space-between"
style={{padding:'0 10px'}}
>

<ButtonGroup
className={classes.btnGrp}
>
    <Button
    className={classes.btn1}
    >
        Min
    </Button>
    <Button
    className={classes.btn1}
    >
        Max
    </Button>
</ButtonGroup>
</Box>
        </Box>

       
        </Paper>

















       </Box> 


       <Box 
       display="flex" 
       flexDirection="column"
       className={classes.box1}
       >
        








        <Paper 
        style={{
            width:'100%',
            height:'30vh'
            }}>
        
        <Box
        display="flex"
        justifyContent="space-between"
        style={{
            width:'100%',
            height:'8vh',
            padding:'0 20px'
        }}
        >




<Box
display="flex"
alignItems="center"
justifyContent="space-between"
style={{width:'80%'}}
>
<Typography 
style={{color:'#000',fontSize:14}}
className={classes.light}>
Size
</Typography>
<Box
display="flex"
alignItems="center"
>
<Typography
style={{fontSize:12,marginRight:5}}
>
Needs Price    
</Typography>    
<Check 
check={true}
/>
</Box>
</Box>
<Divider orientation="vertical"  flexItem />
<Box
display="flex"
alignItems="center"
justifyContent="space-between"
style={{width:'20%',padding:'0 10px'}}
>
<Box
display="flex"
alignItems="center"
>
<Typography
style={{fontSize:12,marginRight:5}}
>
Mandatory
</Typography>    
<Check 
// check={true}
/>
</Box>

</Box>
        </Box>

        <Box
        display="flex"
        alignItems="center"
        className={classes.bg}
        style={{
            width:'100%',
            height:'8vh',
            padding:'10px'
        }}        
        >
<Box 
display="flex"
alignItems="center"
>
<IconButton>
    <AddIcon 
    style={{fontSize:18}}
    className={classes.light}/>
</IconButton>
<Typography className={classes.light}>
Add Something
</Typography>
</Box>
        </Box>

<Box
display="flex"
flexDirection="column"
justifyContent="space-between"
style={{
    height:'14vh',
    padding:'20px'
}}
>

<Typography
className={classes.light}
>
L
</Typography>
<Typography
className={classes.light}
>
M
</Typography>
<Typography
className={classes.light}
>
S
</Typography>

</Box>


        </Paper>





        <Box
display="flex"
justifyContent="flex-end"
>
<IconButton
className={[classes.bg,classes.br]}
style={{
    position:'relative',
    bottom:'31vh',
    left:'10px',
    padding:2,
    }}
>
    <CloseIcon style={{ fontSize:16,fontWeight:'bold' }}/>
</IconButton>
</Box>


<Box
display="flex"
justifyContent="flex-end"
>
<Button
className={classes.lightorange}
style={{
    width:'10rem',
    margin:'1px 0',
    textTransform:'none'
}}
>
   <Typography 
   style={{fontSize:10,display:'flex',alignItems:'center'}}
   className={classes.orange}>
   <BsLink45Deg style={{fontSize:16,marginRight:6}}/>
   Link With Size
   </Typography>
</Button>
</Box>







<Paper 
        style={{
            width:'100%',
            height:'30vh',
            marginTop:'3vh'
            }}>
        
        <Box
        display="flex"
        justifyContent="space-between"
        style={{
            width:'100%',
            height:'8vh',
            padding:'0 20px'
        }}
        >




<Box
display="flex"
alignItems="center"
justifyContent="space-between"
style={{width:'80%'}}
>
<Typography 
style={{color:'#000',fontSize:14}}
className={classes.light}>
Country Style
</Typography>
<Box
display="flex"
alignItems="center"
>
<Typography
style={{fontSize:12,marginRight:5}}
>
Needs Price    
</Typography>    
<Check 
// check={true}
/>
</Box>
</Box>
<Divider orientation="vertical"  flexItem />
<Box
display="flex"
alignItems="center"
justifyContent="space-between"
style={{width:'20%',padding:'0 10px'}}
>
<Box
display="flex"
alignItems="center"
>
<Typography
style={{fontSize:12,marginRight:5}}
>
Mandatory
</Typography>    
<Check 
// check={true}
/>
</Box>

</Box>
        </Box>

        <Box
        display="flex"
        alignItems="center"
        className={classes.bg}
        style={{
            width:'100%',
            height:'8vh',
            padding:'10px'
        }}        
        >
<Box 
display="flex"
alignItems="center"
>
<IconButton>
    <AddIcon 
    style={{fontSize:18}}
    className={classes.light}/>
</IconButton>
<Typography className={classes.light}>
Add Something
</Typography>
</Box>
        </Box>

<Box
display="flex"
flexDirection="column"
justifyContent="space-between"
style={{
    height:'14vh',
    padding:'20px'
}}
>

<Typography
className={classes.light}
>
Blue
</Typography>
<Typography
className={classes.light}
>
Black
</Typography>
<Typography
className={classes.light}
>
Brown
</Typography>

</Box>


        </Paper>





        <Box
display="flex"
justifyContent="flex-end"
>
<IconButton
className={[classes.bg,classes.br]}
style={{
    position:'relative',
    bottom:'31vh',
    left:'10px',
    padding:2,
    }}
>
    <CloseIcon style={{ fontSize:16,fontWeight:'bold' }}/>
</IconButton>
</Box>




















       </Box> 

        </Box>

<Box
alignSelf="flex-end"

>
<Btn
onClick={()=>{
    history.push('/dashboard/product/products/edit/options/edit')
}}
style={{
    margin:'20px 0',
    borderRadius:'5px'
}}
>
    Save & Add Price
</Btn>
</Box>



        </Box>


)
}

const styles=theme =>({

box:{
    width:'100%',
    marginTop:'4vh',
    justifyContent:'space-between'
},
box1:{
    width:'48%'
},
bg:{
    background:theme.palette.primary.dashboardBackground
},
light:{
    fontSize:12,
    color:theme.palette.primary.lightgray
},
btn1:{
    width:'1rem',
    fontSize:10,
    background:theme.palette.primary.dashboardBackground
},
br:{
    border:`1px solid ${theme.palette.primary.lightgray} `
},
dark:{
    background:'#eee',
    color:theme.palette.primary.gray
},
lightorange:{
    background:theme.palette.primary.lightOrange
},
orange:{
    color:theme.palette.primary.main
}

})


export default withRouter(withStyles(styles)(Options))
