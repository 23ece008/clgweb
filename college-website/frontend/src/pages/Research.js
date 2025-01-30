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
  Chip,
  Stack,
} from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link as RouterLink } from 'react-router-dom';

const researchCenters = [
  {
    name: 'Center for Artificial Intelligence and Data Science',
    image: '/images/research/ai-center.jpg',
    description: 'Focused on cutting-edge research in AI, ML, and Data Analytics',
    areas: [
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Big Data Analytics'
    ],
    projects: 12,
    publications: 45
  },
  {
    name: 'IoT and Embedded Systems Research Lab',
    image: '/images/research/iot-lab.jpg',
    description: 'Advanced research in IoT, embedded systems, and smart technologies',
    areas: [
      'Internet of Things',
      'Embedded Systems',
      'Smart Cities',
      'Industrial IoT'
    ],
    projects: 8,
    publications: 32
  },
  {
    name: 'Advanced Manufacturing Technology Center',
    image: '/images/research/manufacturing-lab.jpg',
    description: 'Research in modern manufacturing technologies and Industry 4.0',
    areas: [
      'Industry 4.0',
      'Smart Manufacturing',
      'Robotics',
      'Digital Twin Technology'
    ],
    projects: 10,
    publications: 28
  },
  {
    name: 'Renewable Energy Research Center',
    image: '/images/research/energy-lab.jpg',
    description: 'Research in sustainable energy solutions and smart grid technologies',
    areas: [
      'Solar Energy',
      'Wind Power',
      'Smart Grid',
      'Energy Storage'
    ],
    projects: 15,
    publications: 38
  }
];

const achievements = [
  {
    title: '200+',
    subtitle: 'Research Publications',
    icon: <BarChartIcon fontSize="large" />
  },
  {
    title: '₹5Cr+',
    subtitle: 'Research Funding',
    icon: <ScienceIcon fontSize="large" />
  },
  {
    title: '50+',
    subtitle: 'Research Projects',
    icon: <SchoolIcon fontSize="large" />
  },
  {
    title: '25+',
    subtitle: 'Industry Partners',
    icon: <GroupsIcon fontSize="large" />
  }
];

const publications = [
  {
    title: 'Deep Learning for Smart Healthcare',
    authors: 'Dr. Rajesh Kumar, Dr. Priya S.',
    journal: 'IEEE Transactions on Healthcare',
    year: 2023,
    citations: 45
  },
  {
    title: 'IoT-based Smart Manufacturing Systems',
    authors: 'Dr. Senthil Kumar, Dr. Ramesh R.',
    journal: 'Journal of Industrial IoT',
    year: 2023,
    citations: 32
  },
  {
    title: 'Renewable Energy Integration in Smart Grids',
    authors: 'Dr. Lakshmi P., Dr. Kumar S.',
    journal: 'Renewable Energy Journal',
    year: 2023,
    citations: 28
  },
  {
    title: 'Machine Learning in Education Technology',
    authors: 'Dr. Anitha R., Dr. Suresh K.',
    journal: 'International Journal of Educational Technology',
    year: 2023,
    citations: 25
  }
];

const Research = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Research & Innovation
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Advancing knowledge through cutting-edge research and innovation
          </Typography>
        </Box>

        {/* Research Achievements */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {achievements.map((achievement, index) => (
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
                  {achievement.icon}
                </Box>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                  {achievement.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {achievement.subtitle}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Research Centers */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4 }}>
            Research Centers
          </Typography>
          <Grid container spacing={4}>
            {researchCenters.map((center, index) => (
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
                    image={center.image}
                    alt={center.name}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {center.name}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {center.description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip 
                        icon={<ScienceIcon />} 
                        label={`${center.projects} Projects`} 
                      />
                      <Chip 
                        icon={<SchoolIcon />} 
                        label={`${center.publications} Publications`} 
                      />
                    </Stack>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                      Research Areas:
                    </Typography>
                    <List dense>
                      {center.areas.map((area, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <ScienceIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={area} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Recent Publications */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4 }}>
            Recent Publications
          </Typography>
          <Grid container spacing={4}>
            {publications.map((pub, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                    {pub.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    {pub.authors}
                  </Typography>
                  <Stack 
                    direction="row" 
                    spacing={2} 
                    alignItems="center"
                    divider={<Box sx={{ width: '4px', height: '4px', borderRadius: '50%', bgcolor: 'grey.400' }} />}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {pub.journal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pub.year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Citations: {pub.citations}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Research Opportunities */}
        <Box sx={{ textAlign: 'center' }}>
          <Paper sx={{ p: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h4" gutterBottom>
              Research Opportunities
            </Typography>
            <Typography variant="body1" paragraph>
              Join our vibrant research community and contribute to groundbreaking innovations.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary"
              component={RouterLink}
              to="/research/opportunities"
              size="large"
              sx={{ mt: 2 }}
            >
              Explore Opportunities
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Research;
