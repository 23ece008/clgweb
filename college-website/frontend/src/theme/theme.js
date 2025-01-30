import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3B55', // Deep blue-grey
      light: '#4A5D8B',
      dark: '#1A2238',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF6B6B', // Coral pink
      light: '#FF9999',
      dark: '#CC4B4B',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#4ECDC4', // Turquoise
      light: '#7EDCD6',
      dark: '#3B9B94',
    },
    background: {
      default: '#F7F9FC',
      paper: '#ffffff',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#596575',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      backgroundImage: 'linear-gradient(45deg, #2E3B55, #4A5D8B)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textTransform: 'none',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 700,
      backgroundImage: 'linear-gradient(45deg, #2E3B55, #4A5D8B)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textTransform: 'none',
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '2.2rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '10px 24px',
          fontSize: '1rem',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
          },
        },
        contained: {
          backgroundImage: 'linear-gradient(45deg, #2E3B55, #4A5D8B)',
          '&:hover': {
            backgroundImage: 'linear-gradient(45deg, #1A2238, #2E3B55)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          transition: 'all 0.3s ease-in-out',
        },
        elevation1: {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
        elevation2: {
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
        },
        elevation3: {
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.16)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(90deg, #2E3B55, #4A5D8B)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(78, 205, 196, 0.08)',
            transform: 'translateX(4px)',
          },
        },
      },
    },
  },
});

export default theme;
