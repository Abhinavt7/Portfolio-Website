import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Aspiring AI/ML Engineer
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          A passionate computer science student with expertise in machine learning, deep learning,
          and computer vision. Currently pursuing B.Tech in Computer Science at ITER, Siksha 'O' Anusandhan.
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" href="mailto:abhinavkumar.11154@gmail.com">
            Contact Me
          </Button>
          <Button variant="outlined" href="tel:+918102132216">
            +91 8102132216
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
