import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';


const appointmentBg ={
          background: `url(${bg})`,
          backgroundColor: 'rgba(45, 58, 74, 0.9)',
          backgroundBlendMode: 'darken, luminosity', 
          marginTop: 175
}


const AppointmentBanner = () => {
          return (
                    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                      <img className="img-fluid" style={{ width: 400, marginTop: '-110px', }} src={doctor} alt="" />
                      </Grid>
                      <Grid item xs={12} md={6} sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                textAlign: 'left'
                      }}>
                              <Box>
                              <Typography variant="h6" sx={{mb:3}} style={{color: '#5CE7ED'}}>
                                          Appointment
                                </Typography>
                                <Typography variant="h6"  sx={{mb:3}} style={{color: 'white'}}>
                                        Make An Appointment Today
                                </Typography>
                                <Typography variant="h6"  sx={{mb:3}} style={{color: 'white', fontSize: 14, fontWeight: 300}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut perferendis necessitatibus architecto sunt ex unde quaerat.
                                </Typography>
                                <Button style={{color: 'primary', backgroundColor: '#5CE7ED', borderRadius: 5}}>Lern More</Button>
                              </Box>
                                
                      </Grid>
                    </Grid>
                  </Box>
          );
};

export default AppointmentBanner;