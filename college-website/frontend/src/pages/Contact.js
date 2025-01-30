import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Phone,
  Email,
  LocationOn,
  Send,
} from '@mui/icons-material';

const PageHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
  color: '#fff',
  padding: theme.spacing(8, 0),
  marginBottom: theme.spacing(6),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url(/contact-bg.jpg) center/cover',
    opacity: 0.1,
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '16px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
  },
}));

const ContactInfo = ({ icon: Icon, title, content }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
    <Icon sx={{ 
      fontSize: 40, 
      color: 'primary.main',
      mr: 2,
      p: 1,
      borderRadius: '12px',
      background: 'rgba(30, 60, 114, 0.1)',
    }} />
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {content}
      </Typography>
    </Box>
  </Box>
);

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <PageHeader>
        <Container>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 'bold',
              mb: 2,
              position: 'relative',
              zIndex: 1,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 60%, #FF4500 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              letterSpacing: '1px',
              animation: 'shimmer 2s infinite linear',
              '@keyframes shimmer': {
                '0%': {
                  backgroundPosition: '0% 50%',
                },
                '100%': {
                  backgroundPosition: '100% 50%',
                },
              },
              backgroundSize: '200% auto',
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h5"
            sx={{ 
              opacity: 0.9,
              position: 'relative',
              zIndex: 1,
              maxWidth: '800px'
            }}
          >
            Get in touch with us for any queries about admissions, academics, or campus life
          </Typography>
        </Container>
      </PageHeader>

      <Container sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold',
                    color: 'primary.main',
                    mb: 4,
                    background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 60%, #FF4500 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                    letterSpacing: '1px',
                    animation: 'shimmer 2s infinite linear',
                    '@keyframes shimmer': {
                      '0%': {
                        backgroundPosition: '0% 50%',
                      },
                      '100%': {
                        backgroundPosition: '100% 50%',
                      },
                    },
                    backgroundSize: '200% auto',
                  }}
                >
                  Send us a Message
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{ mb: 3 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      fullWidth
                      sx={{
                        borderRadius: '30px',
                        py: 1.5,
                        background: 'linear-gradient(45deg, #1e3c72 30%, #2a5298 90%)',
                        boxShadow: '0 3px 15px rgba(30, 60, 114, 0.2)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1e3c72 60%, #2a5298 90%)',
                          transform: 'scale(1.02)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledCard sx={{ height: '100%' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 'bold',
                    color: 'primary.main',
                    mb: 4,
                    background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 60%, #FF4500 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                    letterSpacing: '1px',
                    animation: 'shimmer 2s infinite linear',
                    '@keyframes shimmer': {
                      '0%': {
                        backgroundPosition: '0% 50%',
                      },
                      '100%': {
                        backgroundPosition: '100% 50%',
                      },
                    },
                    backgroundSize: '200% auto',
                  }}
                >
                  Contact Information
                </Typography>
                
                <ContactInfo
                  icon={LocationOn}
                  title="Address"
                  content="Sri Eshwar College of Engineering, Kondampatti Post, Vadasithur Via, Kinathukadavu, Coimbatore - 641 202"
                />
                
                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  content="+91 422 2667555"
                />
                
                <ContactInfo
                  icon={Email}
                  title="Email"
                  content="info@sece.ac.in"
                />

                <Box sx={{ mt: 4 }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 'bold',
                      color: 'primary.main' 
                    }}
                  >
                    Office Hours
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Saturday: 9:00 AM - 1:00 PM
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Sunday: Closed
                  </Typography>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
