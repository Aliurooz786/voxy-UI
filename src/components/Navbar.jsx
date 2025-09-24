// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Voxy Brand Name/Logo */}
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
        >
          Voxy
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/dashboard" color="inherit">
            Dashboard
          </Button>
          <Button component={Link} to="/create" color="inherit">
            Create Interview
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;