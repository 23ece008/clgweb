import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Academics', path: '/academics' },
  { title: 'Events', path: '/events' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SECE
      </Typography>
      <List>
        {pages.map((page) => (
          <ListItem
            key={page.title}
            component={RouterLink}
            to={page.path}
            sx={{
              textAlign: 'center',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <ListItemText primary={page.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo/Brand */}
          <img src="/images/logo.jpg" alt="College Logo" style={{ height: '50px', marginRight: '20px' }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SECE
          </Typography>

          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo/Brand for mobile */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SECE
          </Typography>

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.path}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  textTransform: 'none',
                  fontSize: '1rem',
                  mx: 1,
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Contact information */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">+91 422 2667555</Typography>
            </Stack>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;