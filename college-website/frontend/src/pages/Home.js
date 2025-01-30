import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  School,
  Engineering,
  Computer,
  Public,
  People,
  TrendingUp,
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
  color: '#fff',
  padding: theme.spacing(15, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url(/college-bg.jpg) center/cover',
    opacity: 0.2,
  },
}));

const StatCard = ({ title, value, description, icon: Icon }) => {
  return (
    <StyledCard>
      <CardContent sx={{ textAlign: 'center', py: 3 }}>
        <Icon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h4" component="div" sx={{ mb: 1, fontWeight: 'bold' }}>
          {value}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleExplorePrograms = () => {
    navigate('/academics#programs');
  };

  return (
    <Box>
      <HeroSection>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  position: 'relative',
                  zIndex: 1,
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
                Sri Eshwar College of Engineering
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  opacity: 0.9,
                  position: 'relative',
                  zIndex: 1,
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
                Empowering Minds, Engineering Future
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
      </HeroSection>

      <Container sx={{ py: 8 }}>
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            mb: 6,
            fontWeight: 'bold',
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
          Why Choose Sri Eshwar?
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <StatCard
              icon={School}
              title="Academic Excellence"
              value="100%"
              description="Placement record with top companies"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StatCard
              icon={Engineering}
              title="Modern Facilities"
              value="50+"
              description="State-of-the-art laboratories"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StatCard
              icon={People}
              title="Expert Faculty"
              value="200+"
              description="Experienced professors and researchers"
            />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ 
        bgcolor: 'grey.50',
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(135deg, rgba(30, 60, 114, 0.03) 0%, rgba(42, 82, 152, 0.03) 100%)',
        }
      }}>
        <Container>
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              mb: 6,
              fontWeight: 'bold',
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
            Latest Achievements
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "NAAC A+ Accreditation",
                description: "Recognized for outstanding academic standards and infrastructure"
              },
              {
                title: "Industry Partnerships",
                description: "Collaborations with leading tech companies for student development"
              },
              {
                title: "Research Excellence",
                description: "Multiple patents and research publications by faculty and students"
              },
              {
                title: "Smart Campus Initiative",
                description: "Implementation of IoT and AI-driven campus management systems"
              }
            ].map((achievement, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ 
                  height: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary">
                      {achievement.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
