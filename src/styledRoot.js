import React from 'react'

import {MuiThemeProvider,createMuiTheme,responsiveFontSizes} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme=createMuiTheme({

    palette:{
        // type:'dark',
        background:{
           default:'white'
        },
        primary:{
            main:'#ffc845',
            dark:'',
            light:''
                },
        secondary:{
            main:'#ffc845'
        }
    },
    typography:{
        useNextVariants:true
    }
})


function styledRoot(Component){
  
    function Root(props){


   return (
   <MuiThemeProvider theme={responsiveFontSizes(theme)}  >
        <CssBaseline/>
        <Component {...props}/>
   </MuiThemeProvider>
    )
    }

return Root

}

export default styledRoot
