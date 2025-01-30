import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Tabs,
  Tab,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Computer,
  Engineering,
  ElectricBolt,
  Architecture,
  School,
  MenuBook,
  CheckCircle,
  Science,
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const GradientTypography = styled(Typography)(({ theme }) => ({
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
  fontWeight: 'bold',
}));

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index} role="tabpanel">
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const ProgramCard = ({ title, description, icon: Icon, specializations = [], duration, eligibility }) => (
  <StyledCard elevation={3}>
    <CardContent>
      <Box display="flex" alignItems="center" mb={2}>
        <Icon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
        <GradientTypography variant="h5" color="primary">
          {title}
        </GradientTypography>
      </Box>
      <Typography variant="body1" paragraph>
        {description}
      </Typography>
      {specializations.length > 0 && (
        <>
          <GradientTypography variant="subtitle1" color="primary" gutterBottom>
            Specializations:
          </GradientTypography>
          <List dense>
            {specializations.map((spec, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircle color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={spec} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle2" color="text.secondary">
        Duration: {duration}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        Eligibility: {eligibility}
      </Typography>
    </CardContent>
  </StyledCard>
);

const Academics = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const undergraduatePrograms = [
    {
      title: 'B.E. Computer Science and Engineering',
      description: 'Learn cutting-edge technologies in computer science, including AI, ML, and full-stack development.',
      icon: Computer,
      specializations: [
        'Artificial Intelligence and Machine Learning',
        'Data Science',
        'Cloud Computing',
        'Cybersecurity',
      ],
      duration: '4 Years',
      eligibility: '10+2 with Mathematics, Physics, and Chemistry',
    },
    {
      title: 'B.E. Electronics and Communication',
      description: 'Study advanced electronics, communication systems, and signal processing.',
      icon: ElectricBolt,
      specializations: [
        'VLSI Design',
        'Embedded Systems',
        'Communication Systems',
        'Signal Processing',
      ],
      duration: '4 Years',
      eligibility: '10+2 with Mathematics, Physics, and Chemistry',
    },
    {
      title: 'B.E. Mechanical Engineering',
      description: 'Focus on mechanical systems, design, and manufacturing technologies.',
      icon: Engineering,
      specializations: [
        'Design Engineering',
        'Manufacturing Technology',
        'Thermal Engineering',
        'Robotics and Automation',
      ],
      duration: '4 Years',
      eligibility: '10+2 with Mathematics, Physics, and Chemistry',
    },
  ];

  const postgraduatePrograms = [
    {
      title: 'M.E. Computer Science and Engineering',
      description: 'Advanced studies in computer science with research opportunities.',
      icon: Computer,
      specializations: [
        'Advanced AI and ML',
        'Big Data Analytics',
        'Network Security',
      ],
      duration: '2 Years',
      eligibility: 'B.E./B.Tech in relevant discipline',
    },
    {
      title: 'M.E. Manufacturing Engineering',
      description: 'Specialized study in advanced manufacturing technologies and systems.',
      icon: Engineering,
      specializations: [
        'Advanced Manufacturing Systems',
        'Industrial Automation',
        'Quality Engineering',
      ],
      duration: '2 Years',
      eligibility: 'B.E./B.Tech in relevant discipline',
    },
  ];

  const researchPrograms = [
    {
      title: 'Ph.D. Programs',
      description: 'Research opportunities in various engineering disciplines.',
      icon: Science,
      specializations: [
        'Computer Science and Engineering',
        'Electronics and Communication',
        'Mechanical Engineering',
        'Basic Sciences',
      ],
      duration: '3-5 Years',
      eligibility: 'M.E./M.Tech in relevant discipline',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          mb: 6,
          textAlign: 'center',
        }}
      >
        <Container>
          <GradientTypography variant="h2" gutterBottom>
            Academic Programs
          </GradientTypography>
          <Typography variant="h6">
            Discover Our Comprehensive Range of Engineering Programs
          </Typography>
        </Container>
      </Box>

      <Container sx={{ mb: 8 }}>
        {/* Introduction */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="body1" paragraph>
            Sri Eshwar College of Engineering offers a wide range of undergraduate, postgraduate, and research programs
            designed to meet the evolving needs of the industry and society. Our programs combine theoretical knowledge
            with practical experience and industry exposure.
          </Typography>
        </Box>

        {/* Programs Tabs */}
        <Box sx={{ width: '100%', mb: 4 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="Undergraduate Programs" />
            <Tab label="Postgraduate Programs" />
            <Tab label="Research Programs" />
          </Tabs>
        </Box>

        {/* Undergraduate Programs */}
        <TabPanel value={value} index={0}>
          <Grid container spacing={4} id="programs">
            {undergraduatePrograms.map((program, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <ProgramCard {...program} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Postgraduate Programs */}
        <TabPanel value={value} index={1}>
          <Grid container spacing={4}>
            {postgraduatePrograms.map((program, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ProgramCard {...program} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Research Programs */}
        <TabPanel value={value} index={2}>
          <Grid container spacing={4}>
            {researchPrograms.map((program, index) => (
              <Grid item xs={12} md={12} key={index}>
                <ProgramCard {...program} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Call to Action */}
        <Box textAlign="center" mt={6}>
          <GradientTypography variant="h4" gutterBottom>
            Ready to Begin Your Journey?
          </GradientTypography>
          <Typography variant="body1" paragraph>
            Take the first step towards a successful engineering career with SECE.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/admissions"
            sx={{ mt: 2 }}
          >
            Apply Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Academics;
