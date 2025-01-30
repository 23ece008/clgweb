import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Link as RouterLink } from 'react-router-dom';

const programmes = {
  ug: [
    {
      name: 'B.E. Computer Science and Engineering',
      image: '/images/programmes/cse.jpg',
      duration: '4 years',
      intake: 180,
      highlights: [
        'NBA Accredited Programme',
        'Industry-aligned curriculum',
        'State-of-the-art laboratories',
        'Focus on emerging technologies'
      ],
      careers: [
        'Software Developer',
        'Data Scientist',
        'AI/ML Engineer',
        'Cloud Architect'
      ]
    },
    {
      name: 'B.E. Electronics and Communication Engineering',
      image: '/images/programmes/ece.jpg',
      duration: '4 years',
      intake: 120,
      highlights: [
        'NBA Accredited Programme',
        'Modern lab facilities',
        'Industry partnerships',
        'Research opportunities'
      ],
      careers: [
        'VLSI Design Engineer',
        'IoT Specialist',
        'Communication Engineer',
        'Embedded Systems Developer'
      ]
    },
    {
      name: 'B.E. Mechanical Engineering',
      image: '/images/programmes/mech.jpg',
      duration: '4 years',
      intake: 120,
      highlights: [
        'NBA Accredited Programme',
        'Advanced CAD/CAM labs',
        'Industry 4.0 focus',
        'Hands-on training'
      ],
      careers: [
        'Design Engineer',
        'Manufacturing Engineer',
        'Project Manager',
        'R&D Engineer'
      ]
    }
  ],
  pg: [
    {
      name: 'M.E. Computer Science and Engineering',
      image: '/images/programmes/me-cse.jpg',
      duration: '2 years',
      intake: 24,
      highlights: [
        'Advanced research facilities',
        'Specialization in emerging areas',
        'Industry collaboration',
        'Publication support'
      ],
      careers: [
        'Research Scientist',
        'Technical Architect',
        'Technology Consultant',
        'Academic Professional'
      ]
    },
    {
      name: 'M.E. VLSI Design',
      image: '/images/programmes/me-vlsi.jpg',
      duration: '2 years',
      intake: 24,
      highlights: [
        'Industry-standard tools',
        'Research projects',
        'Expert faculty',
        'Placement assistance'
      ],
      careers: [
        'VLSI Design Engineer',
        'Chip Designer',
        'Verification Engineer',
        'Research Engineer'
      ]
    }
  ],
  phd: [
    {
      name: 'Ph.D. in Computer Science and Engineering',
      image: '/images/programmes/phd-cse.jpg',
      duration: '3-5 years',
      intake: 10,
      highlights: [
        'Research funding',
        'Conference support',
        'Publication assistance',
        'Industry collaboration'
      ],
      areas: [
        'Artificial Intelligence',
        'Machine Learning',
        'Data Science',
        'Cloud Computing'
      ]
    },
    {
      name: 'Ph.D. in Electronics and Communication',
      image: '/images/programmes/phd-ece.jpg',
      duration: '3-5 years',
      intake: 8,
      highlights: [
        'Research labs',
        'Expert guidance',
        'Industry projects',
        'International exposure'
      ],
      areas: [
        'VLSI Design',
        'Communication Systems',
        'Signal Processing',
        'IoT and Embedded Systems'
      ]
    }
  ]
};

const Programmes = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const renderProgrammes = (type) => {
    return (
      <Grid container spacing={4}>
        {programmes[type].map((prog, index) => (
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
                image={prog.image}
                alt={prog.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom>
                  {prog.name}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Chip 
                    icon={<TimelineIcon />} 
                    label={`Duration: ${prog.duration}`} 
                    sx={{ mr: 1, mb: 1 }}
                  />
                  <Chip 
                    icon={<SchoolIcon />} 
                    label={`Intake: ${prog.intake}`} 
                    sx={{ mb: 1 }}
                  />
                </Box>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  Programme Highlights:
                </Typography>
                <List dense>
                  {prog.highlights.map((highlight, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <SchoolIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={highlight} />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
                  {type === 'phd' ? 'Research Areas:' : 'Career Opportunities:'}
                </Typography>
                <List dense>
                  {(type === 'phd' ? prog.areas : prog.careers).map((item, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        {type === 'phd' ? 
                          <SchoolIcon color="primary" fontSize="small" /> : 
                          <WorkIcon color="primary" fontSize="small" />
                        }
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
                <Button 
                  variant="contained" 
                  color="primary"
                  component={RouterLink}
                  to="/admissions"
                  sx={{ mt: 2 }}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Our Programmes
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Shaping careers through quality education and innovation
          </Typography>
        </Box>

        {/* Programme Tabs */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTab-root': {
                fontSize: '1.1rem',
                fontWeight: 500,
              }
            }}
          >
            <Tab label="UG Programmes" />
            <Tab label="PG Programmes" />
            <Tab label="Doctoral Programmes" />
          </Tabs>
        </Box>

        {/* Programme Content */}
        <Box sx={{ mt: 4 }}>
          {currentTab === 0 && renderProgrammes('ug')}
          {currentTab === 1 && renderProgrammes('pg')}
          {currentTab === 2 && renderProgrammes('phd')}
        </Box>

        {/* Admission CTA */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Paper sx={{ p: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h4" gutterBottom>
              Ready to Begin Your Journey?
            </Typography>
            <Typography variant="body1" paragraph>
              Join SECE and be part of a vibrant academic community dedicated to excellence.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary"
              component={RouterLink}
              to="/admissions"
              size="large"
              sx={{ mt: 2 }}
            >
              Apply for Admission 2024
            </Button>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Programmes;
