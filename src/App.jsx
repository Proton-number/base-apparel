import React from 'react'
import './App.css'
import Desktop from './Components/Desktop Designs/Desktop'
import Mobile from './Components/Mobile Designs/Mobile'
import {createTheme, ThemeProvider } from '@mui/material'

function App() {

  
 
  const theme = createTheme({
    typography:{
      fontFamily: `'Josefin Sans'  sans-serif`
    }
  })


  return (
     <ThemeProvider theme={theme}>

<div className="App">
        <Desktop />
       <Mobile />
    </div>

     </ThemeProvider>
  )
}

export default App