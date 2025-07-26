import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const Certifications = () => {
  const certifications = [
    'Unsupervised Machine Learning Course from Scaler',
    'Data Analyst Foundations certified from Coursera',
    'Python certification from HackerRank',
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Certifications
        </Typography>
        <Paper>
          <List>
            {certifications.map((cert, index) => (
              <ListItem key={index}>
                <ListItemText primary={cert} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </Box>
  );
};

export default Certifications;
