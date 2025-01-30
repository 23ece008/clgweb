import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
  Button,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  School,
  Star,
  Timeline,
  EmojiEvents,
  CheckCircle,
  ArrowForward,
  People,
  Lightbulb,
  Build,
  Computer,
  LocalLibrary,
  Business,
  Group,
  Psychology,
  Close as CloseIcon,
} from '@mui/icons-material';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    padding: theme.spacing(2),
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const About = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    qualification: '',
    address: '',
  });

  const handleExplorePrograms = () => {
    navigate('/academics#programs');
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Show success message
    alert('Application submitted successfully!');
    handleCloseDialog();
  };

  const stats = [
    { count: '5000+', label: 'Students', icon: People },
    { count: '200+', label: 'Faculty', icon: School },
    { count: '50+', label: 'Labs', icon: Build },
    { count: '100%', label: 'Placement', icon: EmojiEvents },
  ];

  const features = [
    {
      title: 'World-Class Education',
      description: 'State-of-the-art facilities and innovative teaching methodologies',
      icon: School,
    },
    {
      title: 'Industry Integration',
      description: 'Strong partnerships with leading tech companies',
      icon: Computer,
    },
    {
      title: 'Research Excellence',
      description: 'Cutting-edge research facilities and expert guidance',
      icon: Lightbulb,
    },
    {
      title: 'Career Success',
      description: 'Comprehensive placement training and opportunities',
      icon: EmojiEvents,
    },
  ];

  const departments = [
    {
      name: 'Computer Science Engineering',
      icon: Computer,
      description: 'Cutting-edge curriculum in software development, AI, and cybersecurity',
    },
    {
      name: 'Mechanical Engineering',
      icon: Build,
      description: 'Advanced manufacturing, robotics, and sustainable engineering',
    },
    {
      name: 'Electronics & Communication',
      icon: Business,
      description: 'Modern communication systems, VLSI design, and embedded systems',
    },
    {
      name: 'Information Technology',
      icon: Psychology,
      description: 'Data science, cloud computing, and web technologies',
    },
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistently ranked among top engineering colleges in Tamil Nadu',
      icon: LocalLibrary,
    },
    {
      title: 'Research Impact',
      description: '100+ research papers published in international journals annually',
      icon: Lightbulb,
    },
    {
      title: 'Industry Connect',
      description: 'Partnerships with 50+ leading technology companies',
      icon: Business,
    },
    {
      title: 'Student Success',
      description: '95% placement rate with top companies',
      icon: Group,
    },
  ];

  const programs = [
    'B.E. Computer Science and Engineering',
    'B.E. Mechanical Engineering',
    'B.E. Electronics and Communication',
    'B.E. Electrical and Electronics',
    'B.E. Civil Engineering',
    'M.E. Computer Science and Engineering',
    'M.E. Manufacturing Engineering',
  ];

  return (
    <Box>
      {/* Hero Section with Parallax Effect */}
      <Box
        sx={{
          position: 'relative',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundImage: 'url(/images/college-campus.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%)',
            zIndex: 1,
          },
        }}
        className="animated-bg"
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} className="hero-animate">
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 3,
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
                Welcome to SECE
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  color: 'white',
                  opacity: 0.9 
                }}
              >
                Empowering Future Engineers with Excellence in Education
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                onClick={handleExplorePrograms}
                sx={{
                  borderRadius: '30px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                  boxShadow: '0 3px 15px rgba(254, 107, 139, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 90%)',
                    transform: 'scale(1.05)',
                  },
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Explore Programs
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container>
        <Box
          sx={{
            mt: -8,
            mb: 8,
            position: 'relative',
            zIndex: 3,
          }}
        >
          <Grid container spacing={3}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Grid item xs={6} md={3} key={index}>
                  <Paper
                    elevation={3}
                    className="hover-card glass"
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        bgcolor: 'secondary.main',
                        margin: '0 auto 16px',
                      }}
                      className="pulse"
                    >
                      <Icon />
                    </Avatar>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 'bold', mb: 1 }}
                      className="gradient-text"
                    >
                      {stat.count}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>

      {/* Vision & Mission */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="section-transition">
                <Typography variant="h3" className="gradient-text" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 4 }}>
                  To be a premier technical institution by providing state-of-the-art infrastructure,
                  excellent academic environment and good placement opportunities to produce globally
                  competitive engineers.
                </Typography>
                <Typography variant="h3" className="gradient-text" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                  • To impart quality technical education through well-qualified faculty
                  <br />
                  • To enhance industry-institute interaction for practical exposure
                  <br />
                  • To develop leadership qualities and professional ethics
                  <br />
                  • To promote research and entrepreneurial activities
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/college-campus.jpg"
                alt="Sri Eshwar College Campus"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                  },
                }}
                className="image-hover"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Departments Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container>
          <Typography
            variant="h2"
            align="center"
            className="gradient-text"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Our Departments
          </Typography>
          <Grid container spacing={4}>
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Grid item xs={12} sm={6} key={index} className="stagger-item">
                  <Card className="hover-card glass">
                    <CardContent sx={{ p: 4 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Avatar
                          sx={{
                            bgcolor: 'accent.main',
                            width: 48,
                            height: 48,
                            mr: 2,
                          }}
                        >
                          <Icon />
                        </Avatar>
                        <Typography variant="h5">{dept.name}</Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        {dept.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Achievements Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container>
          <Typography
            variant="h2"
            align="center"
            className="gradient-text"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Our Achievements
          </Typography>
          <Grid container spacing={4}>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={index} className="stagger-item">
                  <Card
                    className="hover-card glass"
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                    }}
                  >
                    <IconButton
                      sx={{
                        bgcolor: 'secondary.main',
                        color: 'white',
                        mb: 2,
                        '&:hover': { bgcolor: 'secondary.dark' },
                      }}
                      className="floating"
                    >
                      <Icon />
                    </IconButton>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {achievement.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {achievement.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography
            variant="h2"
            align="center"
            className="gradient-text"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Why Choose SECE?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={index} className="stagger-item">
                  <Card
                    className="hover-card glass"
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                    }}
                  >
                    <IconButton
                      sx={{
                        bgcolor: 'accent.main',
                        color: 'white',
                        mb: 2,
                        '&:hover': { bgcolor: 'accent.dark' },
                      }}
                      className="floating"
                    >
                      <Icon />
                    </IconButton>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: 8,
          px: 2,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          mt: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              mb: 3,
              fontWeight: 'bold',
            }}
          >
            Ready to Begin Your Journey?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
            }}
          >
            Take the first step towards a successful engineering career with SECE
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleOpenDialog}
            sx={{
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
              color: '#000',
              boxShadow: '0 3px 15px rgba(255, 215, 0, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #FFD700 60%, #FFA500 90%)',
                transform: 'scale(1.05)',
              },
            }}
          >
            Apply Now
          </Button>
        </Container>
      </Box>

      <StyledDialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" sx={{ 
              background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 60%, #FF4500 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}>
              Application Form
            </Typography>
            <IconButton onClick={handleCloseDialog}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Program</InputLabel>
                <Select
                  value={formData.program}
                  name="program"
                  label="Program"
                  onChange={handleInputChange}
                  required
                >
                  {programs.map((program) => (
                    <MenuItem key={program} value={program}>
                      {program}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Current Qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Address"
                name="address"
                multiline
                rows={3}
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={handleCloseDialog}
            variant="outlined"
            sx={{ 
              borderRadius: '25px',
              px: 3,
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              borderRadius: '25px',
              px: 3,
              background: 'linear-gradient(45deg, #1e3c72 30%, #2a5298 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1e3c72 60%, #2a5298 90%)',
              },
            }}
          >
            Submit Application
          </Button>
        </DialogActions>
      </StyledDialog>
    </Box>
  );
};

export default About;
