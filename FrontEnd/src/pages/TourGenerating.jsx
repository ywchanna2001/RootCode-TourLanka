import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import TPBackgroundImage1 from '../assets/TPBackgroundImage1.png';
import TPBackgroundImage2 from '../assets/TPBackgroundImage2.png';
import TPBackgroundImage3 from '../assets/TPBackgroundImage3.png';
import TPBackgroundImage4 from '../assets/TPBackgroundImage4.png';
import Adventure from '../assets/Images/TourGeneration/Adventure.png';
import Rafting from '../assets/Images/TourGeneration/Rafting.png';
import Safari from '../assets/Images/TourGeneration/Safari.png';
import Surfing  from '../assets/Images/TourGeneration/Surfing.png';

const TripPackageBanner = () => {
  const slides = [
    { url: TPBackgroundImage1 },
    { url: TPBackgroundImage2 },
    { url: TPBackgroundImage3 },
    { url: TPBackgroundImage4 },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <>
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
      >
        <Container
          maxWidth="lg"
          className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white pb-10"
        >
          <Typography
            variant="h4"
            component="h1"
            style={{ textAlign: 'right', alignSelf: 'flex-center', fontWeight: 'bold' }}
          >
            PLAN YOUR TRIP PACKAGE WITH AI
          </Typography>
          <Typography
            variant="body1"
            className="mb-6 max-w-2xl"
            style={{ textAlign: 'left', alignSelf: 'flex-end' }}
          >
            Embark on a personalized adventure in Sri Lanka with the power of AI. Our intelligent system crafts tailor-made travel packages based on your unique preferences. Let's plan an unforgettable travel package.
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: '#008080', color: 'white', alignSelf: 'flex-end', borderRadius: '25px' }}
          >
            Let's Plan Your Tour
          </Button>
        </Container>
      </div>

      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" gutterBottom>
          Trending
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Adventure Packages
        </Typography>

        {/* Flex Container for Cards */}
        <Grid container spacing={2} justifyContent="center" padding={2}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Adventure}
                alt="Adventure"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Rafting}
                alt="Rafting"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
          <Card>
              <CardMedia
                component="img"
                height="140"
                image={Safari}
                alt="Safari"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Surfing}
                alt="Surfing"
              />
              <CardContent>
              </CardContent>
            </Card>
        </Grid>

        <Grid container spacing={2} justifyContent="center" padding={2}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Adventure}
                alt="Adventure"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Rafting}
                alt="Rafting"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
          <Card>
              <CardMedia
                component="img"
                height="140"
                image={Safari}
                alt="Safari"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Surfing}
                alt="Surfing"
              />
              <CardContent>
              </CardContent>
            </Card>
        </Grid>

        <Grid container spacing={2} justifyContent="center" padding={2}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Adventure}
                alt="Adventure"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Rafting}
                alt="Rafting"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
          <Card>
              <CardMedia
                component="img"
                height="140"
                image={Safari}
                alt="Safari"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Surfing}
                alt="Surfing"
              />
              <CardContent>
              </CardContent>
            </Card>
        </Grid>

        <Grid container spacing={2} justifyContent="center" padding={2}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Adventure}
                alt="Adventure"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Rafting}
                alt="Rafting"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
          <Card>
              <CardMedia
                component="img"
                height="140"
                image={Safari}
                alt="Safari"
              />
              <CardContent>
                {/* Card content goes here */}
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Surfing}
                alt="Surfing"
              />
              <CardContent>
              </CardContent>
            </Card>
        </Grid>
      </Container>
      
    </>
  );
};

export default TripPackageBanner;
