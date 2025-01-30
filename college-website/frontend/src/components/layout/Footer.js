import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Twitter as TwitterIcon, Instagram as InstagramIcon, YouTube as YouTubeIcon, LinkedIn as LinkedInIcon, LocationOn as LocationOnIcon, Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About SECE
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Sri Eshwar College of Engineering is committed to academic excellence
              and preparing students for successful careers in engineering and technology.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://youtube.com/@srieshwar?si=pTo9GA2hevTaA1hj"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#FF0000',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                href="https://x.com/srieshwar_cbe"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#1DA1F2',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/srieshwar_cbe?igsh=ejQxN2trbzl3bXd4"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#E1306C',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/srieshwar"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="nav">
              <FooterLink component={RouterLink} to="/" display="block" mb={1}>
                Home
              </FooterLink>
              <FooterLink component={RouterLink} to="/about" display="block" mb={1}>
                About
              </FooterLink>
              <FooterLink component={RouterLink} to="/academics" display="block" mb={1}>
                Academics
              </FooterLink>
              <FooterLink component={RouterLink} to="/events" display="block" mb={1}>
                Events
              </FooterLink>
              <FooterLink component={RouterLink} to="/contact" display="block" mb={1}>
                Contact
              </FooterLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon />
                <Typography variant="body2">
                  Kondampatti (Post), Vadasithur (Via),<br />
                  Kinathukadavu, Coimbatore - 641 202
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon />
                <Typography variant="body2">
                  +91 422 2667555
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon />
                <Typography variant="body2">
                  info@sece.ac.in
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center">
            {new Date().getFullYear()} Sri Eshwar College of Engineering. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
