import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Chip,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 12px 50px rgba(0,0,0,0.16)',
  },
}));

const GradientBox = styled(Box)(({ gradient }) => ({
  height: 240,
  background: gradient,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.1)',
    zIndex: 1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)',
    zIndex: 2,
  },
}));

const CourseTitle = styled(Typography)(({ theme }) => ({
  color: 'white',
  textAlign: 'center',
  fontWeight: 700,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  zIndex: 3,
  padding: theme.spacing(0, 2),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 60,
    height: 3,
    background: 'white',
    borderRadius: 2,
  },
}));

const StyledChip = styled(Chip)(({ theme, color }) => ({
  borderRadius: '8px',
  fontWeight: 500,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  '& .MuiChip-icon': {
    fontSize: '1.2rem',
  },
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  padding: theme.spacing(1.2, 3),
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1rem',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  '&:hover': {
    boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
  },
}));

const courses = [
  {
    id: 1,
    title: 'Computer Science',
    description: 'Learn programming, algorithms, and software development. Master the art of building innovative software solutions.',
    gradient: 'linear-gradient(135deg, #2196F3 10%, #21CBF3 90%)',
    duration: '4 Years',
    level: "Bachelor's Degree",
  },
  {
    id: 2,
    title: 'Business Administration',
    description: 'Study management, marketing, and business strategy. Develop leadership skills for the modern business world.',
    gradient: 'linear-gradient(135deg, #4CAF50 10%, #8BC34A 90%)',
    duration: '4 Years',
    level: "Bachelor's Degree",
  },
  {
    id: 3,
    title: 'Mechanical Engineering',
    description: 'Study mechanics, thermodynamics, and machine design. Create innovative solutions for real-world challenges.',
    gradient: 'linear-gradient(135deg, #FF9800 10%, #FFC107 90%)',
    duration: '4 Years',
    level: "Bachelor's Degree",
  },
  {
    id: 4,
    title: 'Data Science',
    description: 'Learn data analysis, machine learning, and statistics. Transform data into actionable insights.',
    gradient: 'linear-gradient(135deg, #9C27B0 10%, #E040FB 90%)',
    duration: '2 Years',
    level: "Master's Degree",
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Master social media, SEO, and online advertising. Drive growth in the digital age.',
    gradient: 'linear-gradient(135deg, #F44336 10%, #FF5722 90%)',
    duration: '2 Years',
    level: "Master's Degree",
  },
  {
    id: 6,
    title: 'Architecture',
    description: 'Study design, construction, and urban planning. Shape the future of built environments.',
    gradient: 'linear-gradient(135deg, #795548 10%, #A1887F 90%)',
    duration: '5 Years',
    level: "Bachelor's Degree",
  },
];

const Courses = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      py: 10,
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f5f5f5, #ffffff)',
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              fontWeight: 800,
              mb: 1,
              background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Courses
          </Typography>
          <Typography 
            variant="h5" 
            paragraph 
            align="center" 
            color="text.secondary"
            sx={{ 
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Discover our comprehensive range of programs designed to prepare you for success in your chosen field
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item xs={12} md={6} lg={4} key={course.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StyledCard>
                  <GradientBox gradient={course.gradient}>
                    <CourseTitle variant="h4">
                      {course.title}
                    </CourseTitle>
                  </GradientBox>
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Typography 
                      sx={{ 
                        mb: 3,
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        minHeight: '80px',
                      }}
                    >
                      {course.description}
                    </Typography>
                    <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
                      <StyledChip
                        icon={<AccessTimeIcon />}
                        label={course.duration}
                        color="primary"
                        variant="outlined"
                      />
                      <StyledChip
                        icon={<SchoolIcon />}
                        label={course.level}
                        color="secondary"
                      />
                    </Box>
                    <LearnMoreButton 
                      variant="contained" 
                      color="primary"
                      fullWidth
                    >
                      Learn More
                    </LearnMoreButton>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Courses;
