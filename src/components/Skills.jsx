import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'SQL'],
    },
    {
      category: 'Machine Learning',
      skills: [
        'Supervised & Unsupervised Learning',
        'Regression',
        'Classification',
        'Clustering',
        'Recommendation Systems',
      ],
    },
    {
      category: 'AI Concepts',
      skills: [
        'Neural Networks',
        'NLP Basics',
        'Computer Vision Fundamentals',
        'Model Interpretability (Grad CAM)',
      ],
    },
    {
      category: 'Libraries & Tools',
      skills: [
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'TensorFlow/Keras',
        'OpenCV',
        'ResNet',
        'EfficientNet',
      ],
    },
    {
      category: 'Data Handling',
      skills: [
        'Data Preprocessing',
        'Feature Engineering',
        'Data Augmentation (TTA, MixUp)',
        'Data Visualization',
      ],
    },
    {
      category: 'Version Control',
      skills: ['Git', 'GitHub'],
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Technical Skills
        </Typography>
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {category.category}
                </Typography>
                {category.skills.map((skill, i) => (
                  <Typography key={i} variant="body1">
                    • {skill}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
