import React from 'react';
import { Container, Typography } from '@mui/material';
// import Carousel from './Carousel';
import bannerImg from '../Banner/banner.jpg'
import Carousel from './Carousel';
function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        height: 400,
        backgroundSize: "cover",
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 25,
        justifyContent: 'space-around',
      }}
    >
      <Container
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '40%',
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 15,
              fontFamily: 'Montserrat',
            }}
          >
            Crypto Explorer
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: 'darkgrey',
              textTransform: 'capitalize',
              fontFamily: 'Montserrat',
              textShadow:"0px 0px 5px #000"
            }}
          >            
            Obtain comprehensive information about your preferred cryptocurrency
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  );
}

export default Banner;
