import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
} from '@mui/material';

const facilities = [
  {
    title: 'Modern Hostels',
    description: 'Separate hostels for boys and girls with modern amenities',
    image: '/images/campus/hostel.jpg'
  },
  {
    title: 'Sports Complex',
    description: 'State-of-the-art indoor and outdoor sports facilities',
    image: '/images/campus/sports.jpg'
  },
  {
    title: 'Food Court',
    description: 'Multicuisine food court with hygienic food options',
    image: '/images/campus/food.jpg'
  },
  {
    title: 'Library',
    description: 'Digital library with vast collection of resources',
    image: '/images/campus/library.jpg'
  },
  {
    title: 'Auditorium',
    description: 'Modern auditorium for events and conferences',
    image: '/images/campus/auditorium.jpg'
  },
  {
    title: 'Labs',
    description: 'Well-equipped laboratories with latest technology',
    image: '/images/campus/labs.jpg'
  }
];

const events = [
  {
    title: 'Cultural Fest',
    description: 'Annual cultural extravaganza showcasing student talents',
    image: '/images/events/cultural.jpg'
  },
  {
    title: 'Tech Symposium',
    description: 'Technical events and competitions',
    image: '/images/events/tech.jpg'
  },
  {
    title: 'Sports Meet',
    description: 'Annual sports competition and athletics meet',
    image: '/images/events/sports.jpg'
  }
];

const CampusLife = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Campus Life
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Experience the vibrant and enriching life at our campus
          </Typography>
        </Box>

        {/* Facilities Section */}
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
          Campus Facilities
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {facilities.map((facility, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={facility.image}
                  alt={facility.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {facility.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {facility.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Events Section */}
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
          Campus Events
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {events.map((event, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={event.image}
                  alt={event.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Virtual Tour Section */}
        <Box 
          sx={{ 
            position: 'relative',
            height: '500px',
            backgroundImage: 'url(/images/campus/aerial-view.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 8,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 2,
            }
          }}
        >
          <Box sx={{ position: 'relative', textAlign: 'center', color: 'white' }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Take a Virtual Tour
            </Typography>
            <Typography variant="h6" paragraph>
              Experience our campus from anywhere in the world
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              component="a"
              href="https://sececampustour.com/"
              target="_blank"
              sx={{ 
                mt: 2,
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                }
              }}
            >
              Start Tour
            </Button>
          </Box>
        </Box>

        {/* Student Life Section */}
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
          Student Life
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper 
              sx={{ 
                p: 4,
                height: '100%',
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                color: 'white'
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Clubs & Activities
              </Typography>
              <Typography variant="body1" paragraph>
                Join our various technical and non-technical clubs to explore your interests and develop new skills.
              </Typography>
              <Button 
                variant="contained"
                sx={{ 
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                  }
                }}
              >
                Explore Clubs
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              sx={{ 
                p: 4,
                height: '100%',
                background: 'linear-gradient(45deg, #FF4081 30%, #FF80AB 90%)',
                color: 'white'
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Student Support
              </Typography>
              <Typography variant="body1" paragraph>
                Access counseling, career guidance, and other support services to ensure your success.
              </Typography>
              <Button 
                variant="contained"
                sx={{ 
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                  }
                }}
              >
                Learn More
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CampusLife;
