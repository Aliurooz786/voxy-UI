// src/components/HomePage.jsx
import React from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BarChartIcon from '@mui/icons-material/BarChart';
import SpeedIcon from '@mui/icons-material/Speed';

function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Container maxWidth="md" sx={{ textAlign: 'center', py: { xs: 6, md: 12 } }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to Voxy
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          The AI-powered voice interview agent that helps you find the best candidates, faster.
        </Typography>
        <Button 
          component={Link} 
          to="/dashboard" 
          variant="contained" 
          color="primary" 
          size="large" 
          sx={{ mt: 3, px: 5, py: 1.5, fontWeight: 'bold' }}
        >
          Go to Dashboard
        </Button>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Why Choose Voxy?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <SmartToyIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Intelligent Questions</Typography>
                <Typography color="text.secondary">Our AI generates relevant questions based on your job description.</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <BarChartIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>In-depth Analysis</Typography>
                <Typography color="text.secondary">Get detailed feedback and scoring for every candidate.</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <SpeedIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Fast & Efficient</Typography>
                <Typography color="text.secondary">Save countless hours by automating the initial screening process.</Typography>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: '#1a1a1a', color: 'text.secondary', py: 4, textAlign: 'center', mt: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="body2">© 2025 Voxy - AI Interview Agent</Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;