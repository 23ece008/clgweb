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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LanguageIcon from '@mui/icons-material/Language';
import EventIcon from '@mui/icons-material/Event';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link as RouterLink } from 'react-router-dom';

const partnerships = [
  {
    name: 'University of California, Berkeley',
    country: 'USA',
    image: '/images/international/berkeley.jpg',
    programs: [
      'Student Exchange Program',
      'Faculty Development',
      'Joint Research Projects',
      'Summer Internships'
    ]
  },
  {
    name: 'Technical University of Munich',
    country: 'Germany',
    image: '/images/international/munich.jpg',
    programs: [
      'Dual Degree Programs',
      'Research Collaboration',
      'Student Exchange',
      'Industry Projects'
    ]
  },
  {
    name: 'Nanyang Technological University',
    country: 'Singapore',
    image: '/images/international/ntu.jpg',
    programs: [
      'Academic Exchange',
      'Research Partnership',
      'Innovation Programs',
      'Cultural Exchange'
    ]
  },
  {
    name: 'University of Toronto',
    country: 'Canada',
    image: '/images/international/toronto.jpg',
    programs: [
      'Joint Research Initiatives',
      'Student Mobility',
      'Academic Collaboration',
      'Technology Transfer'
    ]
  }
];

const statistics = [
  {
    count: '50+',
    label: 'Global Partnerships',
    subtitle: 'with top universities',
    icon: <PublicIcon fontSize="large" />
  },
  {
    count: '100+',
    label: 'Global Events',
    subtitle: 'organized',
    icon: <EventIcon fontSize="large" />
  },
  {
    count: '1000+',
    label: 'Students',
    subtitle: 'trained in foreign languages',
    icon: <GroupsIcon fontSize="large" />
  },
  {
    count: '25+',
    label: 'Advisory Board Members',
    subtitle: 'from leading overseas universities',
    icon: <SupervisorAccountIcon fontSize="large" />
  }
];

const programs = [
  {
    title: 'Student Exchange Programs',
    description: 'Experience global education through our semester and year-long exchange programs with leading universities worldwide.',
    features: [
      'Academic credit transfer',
      'Cultural immersion',
      'Global networking',
      'Professional development'
    ],
    image: '/images/international/exchange.jpg'
  },
  {
    title: 'International Internships',
    description: 'Gain valuable international work experience through our industry partnerships across the globe.',
    features: [
      'Industry exposure',
      'Global work culture',
      'Skill development',
      'Career opportunities'
    ],
    image: '/images/international/internship.jpg'
  },
  {
    title: 'Research Collaborations',
    description: 'Engage in cutting-edge research projects with international universities and research centers.',
    features: [
      'Joint publications',
      'Research funding',
      'Knowledge exchange',
      'Innovation opportunities'
    ],
    image: '/images/international/research.jpg'
  }
];

const events = [
  {
    title: 'International Conference on Emerging Technologies',
    date: 'September 2024',
    description: 'Annual conference featuring speakers from global tech companies and universities.'
  },
  {
    title: 'Global Innovation Summit',
    date: 'November 2024',
    description: 'Platform for showcasing innovative projects and networking with international partners.'
  },
  {
    title: 'Cultural Exchange Week',
    date: 'February 2025',
    description: 'Celebration of diverse cultures through exhibitions, performances, and workshops.'
  }
];

const International = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            International Relations
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Your Runway for Global Opportunities
          </Typography>
        </Box>

        {/* Statistics */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {statistics.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper 
                sx={{ 
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {stat.icon}
                </Box>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                  {stat.count}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {stat.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.subtitle}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Global Partners */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4 }}>
            Our Global Partners
          </Typography>
          <Grid container spacing={4}>
            {partnerships.map((partner, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={partner.image}
                    alt={partner.name}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {partner.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {partner.country}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
                      Collaboration Areas:
                    </Typography>
                    <List dense>
                      {partner.programs.map((program, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <HandshakeIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={program} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* International Programs */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4 }}>
            International Programs
          </Typography>
          <Grid container spacing={4}>
            {programs.map((program, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={program.image}
                    alt={program.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom>
                      {program.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {program.description}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                      Key Features:
                    </Typography>
                    <List dense>
                      {program.features.map((feature, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <SchoolIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Upcoming Events */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4 }}>
            Upcoming International Events
          </Typography>
          <Grid container spacing={4}>
            {events.map((event, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  sx={{ 
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {event.date}
                  </Typography>
                  <Typography variant="body1">
                    {event.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Apply CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <Paper sx={{ p: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h4" gutterBottom>
              Start Your Global Journey
            </Typography>
            <Typography variant="body1" paragraph>
              Explore international opportunities and be part of our global community.
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center"
              sx={{ mt: 3 }}
            >
              <Button 
                variant="contained" 
                color="secondary"
                component={RouterLink}
                to="/international/exchange"
                size="large"
              >
                Exchange Programs
              </Button>
              <Button 
                variant="outlined" 
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
                component={RouterLink}
                to="/international/opportunities"
                size="large"
              >
                View Opportunities
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default International;
