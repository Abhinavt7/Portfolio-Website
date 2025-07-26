import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Container } from '@mui/material';

const Projects = () => {
  const projects = [
    {
      title: 'Netflix Movie Recommendation System',
      tech: 'Python, Matrix Factorization, SVD++',
      description: [
        'Engineered a collaborative filtering recommendation system to emulate Netflix\'s content suggestion engine.',
        'Implemented and compared matrix factorization and SVD++ algorithms in Python to process user movie ratings dataset.',
      ],
    },
    {
      title: 'Automated Diabetic Retinopathy Detection & Classification',
      tech: 'ResNet-34, ENet-B3, Grad-CAM, CLAHE, TTA',
      description: [
        'Engineered a binary classification screening tool using ResNet-34, achieving ROC-AUC of 0.9846.',
        'Implemented EfficientNet-B3 model for 5-class severity grading with 96.9% accuracy.',
        'Applied Test-Time Augmentation (TTA) and used Grad-CAM visualizations for model interpretability.',
      ],
    },
    {
      title: 'Digital Music Store Analysis',
      tech: 'SQL (PostgreSQL)',
      description: [
        'Performed comprehensive analysis of digital music store\'s database.',
        'Wrote SQL queries to determine top-selling genres and most profitable countries.',
        'Utilized CTEs and Window Functions to identify popular music genres by country.',
      ],
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {project.tech}
                  </Typography>
                  {project.description.map((desc, i) => (
                    <Typography key={i} variant="body1" paragraph>
                      • {desc}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
