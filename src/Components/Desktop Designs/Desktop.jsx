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
    id='desktop-view'   
     sx={{
      width:{
          sm: '44em', //600
          lg: '80em' //1200s
      },
      borderRadius:'24px'
  }}
  style={{ display: 'flex'}}  
  >
      
    <Stack  p={12} spacing={8}>
    
    <Box >
    <Box component='img' src={logo} style={{borderRadius:'30px'}}/>
    </Box>


    <Stack spacing={2}>

        <Typography variant= 'h1' style={{textTransform:'uppercase', width: '90%'}} > We're <b>Coming soon</b> </Typography>

        <Typography variant='subtitle1'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up to date with announcements and our launch deals.</Typography>

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
       style={{width:'90%'}}
       />
    </Box>


    </Stack>

    <Box>
        <Box component='img' src={heroDesktop}/>
    </Box>
    



    </Paper>
  )
}

export default Desktop
