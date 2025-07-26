import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const Education = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Education
        </Typography>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Bachelor of Technology in Computer Science and Engineering
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            ITER, Siksha 'O' Anusandhan
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            CGPA - 8.03
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Session 2021-25
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Education;
