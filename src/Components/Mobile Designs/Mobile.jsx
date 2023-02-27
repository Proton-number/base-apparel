import { Box, Paper, Typography, Stack, TextField, InputAdornment, IconButton , createTheme, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import logo from '/src/images/logo.svg'
import heroMobile from "/src/images/hero-mobile.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReportIcon from '@mui/icons-material/Report';
import './Mobile.css'



function Mobile() {

    
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
     id='mobile-view'
     sx={{
       borderRadius:'30px'
     }}
        elevation={8}
        
     >
      
      <Stack p={4} spacing={4}>

         <Box>
          <Box component='img' src={logo} />
         </Box>

         <Box 
         style={{
          display:'flex',
          justifyContent:'center'
         }}
         >
          <Box component='img' src={heroMobile} sx={{width:'100%', height:'auto'}} />
         </Box>

         <Stack spacing={4}>
          
         <Typography 
      variant= 'h2'  
      style={{textTransform:'uppercase', textAlign:'center'}} 
      >  
      <span> We're</span> <b>Coming soon</b> 
      </Typography>

<Typography sx={{ 
  fontWeight:700 ,
  color:'hsl(4, 46%, 70%)',
  textAlign:'center'
}}
 variant='subtitle1'
 >
   Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up to date with announcements and our launch deals.
   </Typography>
      

         
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
        width:'100%'
      }}
       />
    </Box>



        

         </Stack>

      </Stack>

     
    </Paper>
  )
}

export default Mobile
