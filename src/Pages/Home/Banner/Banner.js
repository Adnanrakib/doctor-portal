import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Container } from '@mui/material';
import Button from '@restart/ui/esm/Button';

const bannerBg ={
          background: `url(${bg})`,
         
}

const verticalCenter ={
          display: 'flex',
          alignItema: 'center',
          height: 300,
          
}

const Banner = () => {
          return (
                   
          <Container style={{bannerBg}} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{ ...verticalCenter, textAlign:'left' }} xs={12} md={6}>
        <Box>
        <Typography variant="h3">
                   Your New Smile <br />
                   Starts Here
         </Typography>
         <Typography variant="h6" sx={{ my:3, fontSize: 13, fontWeight: 300, color: 'gray'}}>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quo veritatis quos iure error eos! Maxime totam saepe eligendi eveniet.
         </Typography>
         <Button style={{color: 'primary', backgroundColor: '#5CE7ED'}}>Get appointment</Button>
        </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter} >
          <img style={{width: '350px'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
          );
};

export default Banner;