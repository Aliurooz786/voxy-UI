import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InterviewCard from './InterviewCard';

// Import MUI Components
import { Box, Button, Container, Grid, Typography } from '@mui/material';

function Dashboard() {
  const [interviews, setInterviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const userEmail = 'babue.bhai@example.com';
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/v1/interviews?userEmail=${userEmail}`;
        const response = await axios.get(apiUrl);
        setInterviews(response.data);
      } catch (err) {
        setError("Could not load interview data.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchInterviews();
  }, []);

  if (isLoading) return <Typography>Loading your interviews...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h2">
          Your Interviews
        </Typography>
        <Button component={Link} to="/create" variant="contained" color="primary">
          Create New Interview
        </Button>
      </Box>

      {interviews.length === 0 ? (
        <Typography>You have not created any interviews yet.</Typography>
      ) : (
        <Grid container spacing={3}>
          {interviews.map((interview) => (
            <Grid item key={interview.interviewId} xs={12} sm={6} md={4}>
              <InterviewCard interview={interview} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Dashboard;