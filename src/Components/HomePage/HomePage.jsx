import { Grid } from '@mui/material';
import React from 'react';

import { Typography } from '@mui/material';
import { Container } from '@mui/system';



const HomePage = () => {
    const image = 'http://wallpapers-image.ru/1920x1080/mountains/wallpapers/mountains-wallpapers-1920x1080-00019.jpg';
    
    return (<>
        <Grid style={{  width:'100%', position:"relative", marginBottom:0}}>
            <img src={`${image}`} width={'100%'} height={'500px'} alt="" />
        </Grid>
        <Grid style={{ marginBottom:0,position: "absolute", left: '30%', top: '35%', textAlign: 'center' }}>
            <hr />
            <Typography style={{ color: 'white', fontSize: 50 }}>Traveline</Typography>
            <hr />
        <Typography style={{color:'white', fontSize:30}}>Предлагает вам самые лучшие туры</Typography>
            </Grid>
    </>
    );
};

export default HomePage;