import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Event,
  LocationOn,
  AccessTime,
  Category,
  CalendarMonth,
} from '@mui/icons-material';
import Modal from 'react-modal';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

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
    background: 'url(/events-bg.jpg) center/cover',
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

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '8px',
  fontWeight: 500,
  '& .MuiChip-icon': {
    color: 'inherit',
  },
}));

const StyledModal = styled(Modal)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    padding: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.8)', // Transparent background
    backdropFilter: 'blur(10px)', // Blur effect
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1), // Reduced margin for compactness
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const EventItem = ({ event, openModal }) => {
  const theme = useTheme();
  
  return (
    <StyledCard>
      <CardContent sx={{ p: 3 }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            color: 'primary.main',
            mb: 2,
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
          {event.title}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <StyledChip
            icon={<CalendarMonth />}
            label={event.date}
            color="primary"
            variant="outlined"
          />
          <StyledChip
            icon={<LocationOn />}
            label={event.venue}
            color="secondary"
            variant="outlined"
          />
          <StyledChip
            icon={<Category />}
            label={event.category}
            color="info"
            variant="outlined"
          />
        </Box>

        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ mb: 3 }}
        >
          {event.description}
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: '30px',
            background: 'linear-gradient(45deg, #1e3c72 30%, #2a5298 90%)',
            boxShadow: '0 3px 15px rgba(30, 60, 114, 0.2)',
            '&:hover': {
              background: 'linear-gradient(45deg, #1e3c72 60%, #2a5298 90%)',
              transform: 'scale(1.05)',
            },
          }}
          onClick={openModal}
        >
          Register Now
        </Button>
      </CardContent>
    </StyledCard>
  );
};

const Events = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    qualification: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);

  const programs = [
    'B.E. Computer Science and Engineering',
    'B.E. Mechanical Engineering',
    'B.E. Electronics and Communication',
    'B.E. Electrical and Electronics',
    'B.E. Civil Engineering',
    'M.E. Computer Science and Engineering',
    'M.E. Manufacturing Engineering',
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      program: '',
      qualification: '',
      address: '',
    });
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      closeModal();
      alert(`Registered: ${JSON.stringify(formData)}`);
    }, 2000);
  };

  const upcomingEvents = [
    {
      title: "Idea Ignite Hackathon",
      date: "Dec 9 - 12, 2024",
      venue: "Main Auditorium",
      category: "Technical",
      description: "A national level hackathon focusing on innovative solutions for real-world problems."
    },
    {
      title: "CAS (AI Fusion 2024)",
      date: "Dec 11 - 26, 2024",
      venue: "AI Lab",
      category: "Workshop",
      description: "Intensive workshop on artificial intelligence and its applications in modern technology."
    },
    {
      title: "iTech Hackfest 2024",
      date: "Dec 12 - 14, 2024",
      venue: "IT Block",
      category: "Competition",
      description: "A platform for students to showcase their technical skills and innovative ideas."
    }
  ];

  const technicalEvents = [
    {
      title: "IEEE - PROJECT EXPO 2024",
      date: "Dec 21, 2024",
      venue: "Engineering Block",
      category: "Exhibition",
      description: "Annual project exhibition showcasing innovative student projects."
    },
    {
      title: "E-Bike Design Challenge 2024",
      date: "Dec 26, 2024",
      venue: "Mechanical Block",
      category: "Competition",
      description: "Design competition focused on sustainable electric bike solutions."
    }
  ];

  const culturalEvents = [
    {
      title: "Ekklesia'24",
      date: "Jan 6 - 11, 2025",
      venue: "College Ground",
      category: "Cultural",
      description: "Annual cultural festival featuring music, dance, and theatrical performances."
    },
    {
      title: "Grand Technical Carnival",
      date: "Jan 20 - 31, 2025",
      venue: "Various Locations",
      category: "Technical",
      description: "A month-long celebration of technology and innovation."
    }
  ];

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
            Campus Events
          </Typography>
          <Typography 
            variant="h5"
            sx={{ 
              opacity: 0.9,
              position: 'relative',
              zIndex: 1,
              maxWidth: '800px',
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
            Discover exciting events, workshops, and activities happening at Sri Eshwar College of Engineering
          </Typography>
        </Container>
      </PageHeader>

      <Container sx={{ mb: 8 }}>
        {/* Upcoming Events */}
        <Typography 
          variant="h3" 
          gutterBottom 
          textAlign="center"
          sx={{ 
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
          Upcoming Events
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {upcomingEvents.map((event, index) => (
            <Grid item xs={12} md={4} key={index}>
              <EventItem event={event} openModal={openModal} />
            </Grid>
          ))}
        </Grid>

        {/* Technical Events */}
        <Typography 
          variant="h3" 
          gutterBottom 
          textAlign="center"
          sx={{ 
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
          Technical Events
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {technicalEvents.map((event, index) => (
            <Grid item xs={12} md={6} key={index}>
              <EventItem event={event} openModal={openModal} />
            </Grid>
          ))}
        </Grid>

        {/* Cultural Events */}
        <Typography 
          variant="h3" 
          gutterBottom 
          textAlign="center"
          sx={{ 
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
          Cultural Events
        </Typography>
        <Grid container spacing={4}>
          {culturalEvents.map((event, index) => (
            <Grid item xs={12} md={6} key={index}>
              <EventItem event={event} openModal={openModal} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <StyledModal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Registration Form">
        <Typography variant="h4">Register</Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
          <StyledTextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <StyledTextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <StyledTextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <StyledTextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <FormControl fullWidth required>
            <InputLabel>Program</InputLabel>
            <Select
              name="program"
              value={formData.program}
              onChange={handleInputChange}
            >
              {programs.map((program) => (
                <MenuItem key={program} value={program}>{program}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <StyledTextField
            fullWidth
            label="Current Qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleInputChange}
            required
          />
          <StyledTextField
            fullWidth
            label="Address"
            name="address"
            multiline
            rows={2}
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
          <Button type="button" onClick={closeModal} variant="outlined">Close</Button>
        </form>
      </StyledModal>
    </Box>
  );
};

export default Events;
