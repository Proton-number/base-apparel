import { Box, Paper, Typography, Container } from '@mui/material'
import React, { Component } from 'react'
import logo from '/src/images/logo.svg'
import heroDesktop from "/src/images/hero-desktop.jpg"
import arrow from "/src/images/icon-arrow.svg"
import pattern from "/src/images/bg-pattern-desktop.svg"

// /src/images/icon-error.svg

function Desktop() {
  return (
    <Paper id='desktop-view'>
      
    <Box>
    <Box component='img' src={logo} />
    </Box>


    <Container>

        <Typography variant= 'h1' style={{textTransform:'uppercase'}} > We're <b>Coming soon</b> </Typography>

        <Typography variant='subtitle1'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up to date with announcements and our launch deals.</Typography>

    </Container>

{/* INPUTFIELDS!! */}
    <Box>

    </Box>

    </Paper>
  )
}

export default Desktop
