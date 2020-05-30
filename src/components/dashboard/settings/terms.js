import React from 'react'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {withRouter} from 'react-router-dom'
import Btn from '../../general/button'


const Terms = ({classes,history}) => {



return (
       
<Grid lg={9} className={classes.form} style={{position: 'relative',left:'2vw'}} >

<Paper className={classes.form} >

<Grid className={classes.inputsCont}>

<Typography style={{position: 'relative',bottom:'3vh'}}>
    Terms & Conditions
</Typography>    

<label className={classes.label}>

Maecenas at urna sed ex pellentesque pellentesque. Cras blandit luctus dictum. Sed accumsan hendrerit ex in euismod. Suspendisse consectetur porttitor ante quis dapibus. Suspendisse fringilla pellentesque cursus. In facilisis venenatis tempus. Nunc ac dolor pharetra, imperdiet tellus sit amet, venenatis lacus. Nam maximus leo quis ullamcorper egestas. Quisque vitae ante posuere, dictum eros nec, porta ipsum. Sed ut nisi pretium, molestie lectus at, vulputate neque. Etiam ac enim justo. Cras eu lacus blandit, dapibus turpis at, lacinia massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
Donec bibendum erat quis ligula cursus varius. Curabitur luctus, velit ut porta bibendum, erat lorem pretium justo, id fermentum ex erat sit amet augue. Praesent convallis ipsum elementum tristique ornare. Phasellus porttitor ante nec enim efficitur, efficitur commodo quam pellentesque. Maecenas non vehicula massa, eu mattis sem. Praesent placerat diam ante, eu hendrerit erat accumsan ac. Donec eu varius sapien. Nam pretium aliquet dolor, in interdum neque tincidunt cursus.

<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium suscipit libero, ac aliquet justo euismod at. Donec luctus eros et nisl rhoncus consectetur. Aenean pretium elit ut massa elementum, ut varius neque eleifend. Mauris dictum purus tellus, at placerat est hendrerit ac. Sed egestas vulputate dui, sed suscipit lorem feugiat et. Maecenas ut fringilla nibh, eu venenatis enim. Quisque ornare dapibus justo ac convallis. Donec hendrerit mollis nunc. Proin nisi justo, dapibus non convallis eget, semper vitae massa. Sed ut lectus eu elit vulputate scelerisque. Morbi a aliquam nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam at sodales massa.

Sed commodo, dui vehicula pharetra malesuada, eros arcu sollicitudin felis, vitae scelerisque massa lorem vel nunc. Nulla sapien diam, euismod sed arcu a, luctus vehicula odio. Mauris lobortis imperdiet nisi a semper. Proin ullamcorper quam et velit ornare consequat. Morbi hendrerit arcu ac sem feugiat, tempor imperdiet ante rhoncus. Mauris condimentum, tortor a porta consectetur, ipsum ante lacinia erat, in varius risus velit vel massa. Phasellus mattis lacus vel mi finibus, ac pharetra lorem suscipit. Mauris quis varius turpis, et imperdiet nisi. Maecenas nec velit mollis, posuere ligula tempor, imperdiet est. Phasellus metus purus, interdum a metus vel, dapibus aliquet leo. Nunc vitae leo neque.

</label>

</Grid>


<Btn
style={{marginLeft:'2.5rem'}}
>
Edit
</Btn>

</Paper>


</Grid>

    )
}



const styles =theme=>({



inputsCont:{
display:'flex',
flexDirection:'column',
padding:'3rem'
},
label:{
color:theme.palette.primary.gray,
fontSize:12
},

grid:{
    height:'80vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
},

form:{
    height:'90vh',
    width:'55vw',
}

})


export default withRouter(withStyles(styles)(Terms))