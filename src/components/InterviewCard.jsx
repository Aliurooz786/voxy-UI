import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, Box } from '@mui/material';

function InterviewCard({ interview }) {
  const formattedDate = new Date(interview.createdAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {interview.jobDescription.substring(0, 50)}...
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          Created on: {formattedDate}
        </Typography>
        <Box>
          <Typography 
            variant="caption" 
            sx={{ 
              backgroundColor: '#e6f7ff', 
              color: '#096dd9', 
              padding: '4px 8px', 
              borderRadius: '12px' 
            }}
          >
            {interview.status}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" href={`/results/${interview.interviewId}`}>View Details</Button>
      </CardActions>
    </Card>
  );
}

export default InterviewCard;