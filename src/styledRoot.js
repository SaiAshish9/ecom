import React from 'react'

import {MuiThemeProvider,createMuiTheme,responsiveFontSizes} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme=createMuiTheme({

    palette:{
        // type:'dark',
        background:{
           default:'#fff'
        },
        primary:{
            main:'#ffc845',
            dashboardBackground:'#f7f7f7',
            iconBtnBackground:'#fef8e9',
            gray:'#686b73',
            lightgray:'#babbbf',
            orange:'#ffb476',
            lightOrange:'#fff3e9',
            lightgreen:'#d5ecc7',
            green:'#78c24a',
            label:'#9c9ea3'
                },
        secondary:{
            main:'#ffc845'
        }
    },
    typography:{
        useNextVariants:true,
        fontFamily:"'Poppins', sans-serif"
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
