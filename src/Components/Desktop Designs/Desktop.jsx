import { Box, Paper, Typography, Stack, TextField, InputAdornment, IconButton  } from '@mui/material'
import React, { Component } from 'react'
import logo from '/src/images/logo.svg'
import heroDesktop from "/src/images/hero-desktop.jpg"
import arrow from "/src/images/icon-arrow.svg"
import pattern from "/src/images/bg-pattern-desktop.svg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// /src/images/icon-error.svg

function Desktop() {
  return (
    <Paper 
   sx={{
     height:{
       lg: '48.4em' //1200
     }
   }}
    id='desktop-view' 
    style={{ display: 'flex', borderRadius:'20px'}}  >
      
    <Stack p={{ lg: '55px'}} spacing={8}>
    
    <Box >
    <Box 
    component='img' 
    src={logo} 
    />
    </Box>


    <Stack spacing={2}>

        <Typography variant= 'h1' style={{textTransform:'uppercase', width: '90%'}} > We're <b>Coming soon</b> </Typography>

        <Typography sx={{ 
          width:{
            lg: '70%'
          }
        }}
         variant='subtitle1'
         >
           Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up to date with announcements and our launch deals.
           </Typography>

    </Stack>

{/* INPUTFIELDS!! */}
    <Box>
       <TextField 
       label='Email Address' 
       InputProps={{
        endAdornment: <InputAdornment position='end'>
           <IconButton><ArrowForwardIosIcon/></IconButton>
        </InputAdornment>
       }} 
      sx={{
        width:{
          lg: '60%' //1200
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
          lg: '520px' //1200 
        }, 
        height:{
          lg: '770px' //1200 
        },
        borderTopRightRadius:{
          lg: '20px'
        },
        borderBottomRightRadius:{
          lg: '20px'
        }
      }}
        />
    </Box>
    



    </Paper>
  )
}

export default Desktop
