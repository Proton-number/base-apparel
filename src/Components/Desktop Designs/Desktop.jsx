import { Box, Paper, Typography, Stack, TextField, InputAdornment, IconButton  } from '@mui/material'
import React, { Component } from 'react'
import {  createTheme, ThemeProvider  } from '@mui/material'
import './Desktop.css'
import logo from '/src/images/logo.svg'
import heroDesktop from "/src/images/hero-desktop.jpg"
import arrow from "/src/images/icon-arrow.svg"
import pattern from "/src/images/bg-pattern-desktop.svg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


// /src/images/icon-error.svg

function Desktop() {


  
  const theme = createTheme({
    typography:{
  fontFamily: 'Josefin Sans, sans-serif'
 
    }
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
      position:'relative'
    }}
    elevation={8}
    >
      
   <Stack direction='row'>

   <Stack 
    p={{ 
      sm: '30px' , //600
      lg: '54px' //1200
    }} 
    spacing={8}
    sx={{position:'relative'}}
    >
    
    <Box >
    <Box 
    component='img' 
    src={logo} 
    />
    </Box>


    <Stack spacing={2}>

      <ThemeProvider theme={theme}>
      <Typography variant= 'h1'  style={{textTransform:'uppercase'}} >  <span> We're</span> <b>Coming soon</b> </Typography>

<Typography sx={{ 
  width:{
    lg: '98%'
  },
  color:'hsl(4, 46%, 70%)'
}}
 variant='subtitle1'
 >
   Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up to date with announcements and our launch deals.
   </Typography>
      </ThemeProvider>

         

    </Stack>

{/* INPUTFIELDS!! */}
    <Box>
       <TextField 
       label='Email Address' 
       InputProps={{
        endAdornment: 
        <InputAdornment position='end'>
           <IconButton><ArrowForwardIosIcon/></IconButton>
        </InputAdornment>
       }} 
      sx={{
        width:{
          sm: '99%' , //600
          lg: '80%' //1200
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
          sm: '320px' , // 600 
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
    
    <Box component='img' 
           src={pattern} 
           sx=
           {{
            opacity:'38%',
            position:'absolute',
            width:{
              sm: '446px' , //600
              lg: '694px' //1200
            },
            height:{
              sm: '720px' ,//600
              lg: '732px' //1200
            },
            borderTopLeftRadius:{
              sm: '30px' , //600
              lg: '30px'
            },
            borderBottomLeftRadius:{
              sm: '30px' , //600
             lg: '30px'
            }
            }} />


   </Stack>

    </Paper>
  )
}

export default Desktop
