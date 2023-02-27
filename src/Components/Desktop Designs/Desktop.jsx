import { Box, Paper, Typography, Stack, TextField, InputAdornment, IconButton , createTheme, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import './Desktop.css'
import logo from '/src/images/logo.svg'
import heroDesktop from "/src/images/hero-desktop.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReportIcon from '@mui/icons-material/Report';
import { motion } from 'framer-motion'



function Desktop() {

  const [emailText, setEmailText] = useState('')
  const [emailError, setEmailError] = useState('')
  const [errorColor, setErrorColor] = useState(false)
  const [showCaution, setshowCaution] = useState(false)


  
const btnHandler = () =>{
  if ( !emailText.includes('@')  ){
    setEmailError('Please provide a valid email')
    setErrorColor(true)
    setshowCaution(true)
    } 
    else{
      setErrorColor(false)
    setshowCaution(false)
      setEmailText('')
      setEmailError('')
    }
}


const cautionTheme = createTheme({
  palette:{
    primary:{
          main:'hsl(359, 86%, 49%)',
      }
  },

 
})
      

  return (
    <Paper 
    id='desktop-view' 
    sx={{
     
      height:{
        sm: '720px' , //600
        lg: '733px' //1200
      },
      borderRadius:'30px',
    }}
    elevation={8}
    >
      
   <Stack direction='row'>

   <Stack 
    p={{ 
      sm: '20px' , //600
      lg: '54px' //1200
    }} 
    spacing={5}
   
    >
    
    <Box  >
    <Box 
    component='img' 
    src={logo} 
    />
    </Box>


    <Stack spacing={2}  >

      <Typography 
      component={motion.h1} 
      variant= 'h1'  
      style={{textTransform:'uppercase'}} 
      sx={{fontSize:{sm:'83px', lg:'110px'}}} 
      initial={{opacity:0}} 
      animate={{opacity:1}}  
      transition={{delay:.4}}
      >  
      <span> We're</span> <b>Coming soon</b> 
      </Typography>

<Typography sx={{ 
  fontWeight:700 ,
  color:'hsl(4, 46%, 70%)',
}}
component={motion.p}
 variant='subtitle1'
 initial={{opacity:0}} 
 animate={{opacity:1}}  
 transition={{delay:.3}}
 >
   Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up to date with announcements and our launch deals.
   </Typography>
      

         

    </Stack>

{/* INPUTFIELDS!! */}
    <Box>
       <TextField 
       error={ emailText.includes('@') ? false : errorColor}  helperText={emailText.includes('@') ? '' : emailError} onChange={(e) => setEmailText(e.target.value)} 
       value={emailText} 
       label='Email Address' 
       InputProps={{
        endAdornment: 
        <InputAdornment position='end'>

         
         { emailText.includes('@') ? false :  showCaution && (
          <ThemeProvider theme={cautionTheme}>
          <IconButton>
             <ReportIcon color='primary'  />
           </IconButton>
 
          </ThemeProvider>
         )}

           <IconButton >
            <ArrowForwardIosIcon 
             onClick={btnHandler}
             />

            </IconButton>

        </InputAdornment>,
        style:{
          borderRadius:'25px',
         
        }
       }} 
      sx={{
        width:{
          sm: '93%' , //600
          lg: '92%' //1200
        }
      }}
       />
    </Box>


    </Stack>

    <Box>
        <Box 
        component='img' 
        src={heroDesktop}
        sx={{
          width:{
          sm: '350px' , // 600 
          md: '400px' , //900
          lg: '581px' //1200 
        }, 
        height:{
          sm: '720px' , // 600 
          lg: '733px' //1200 
        },
        borderTopRightRadius:{
          sm: '30px' , //600
          lg: '30px' //1200
        },
        borderBottomRightRadius:{
          sm: '30px' , //600
          lg: '30px' //1200
        }
      }}
        />
    </Box>
   

   </Stack>

    </Paper>
  )
}

export default Desktop
