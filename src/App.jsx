// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import InterviewForm from './components/InterviewForm';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

// Import MUI theme components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Import our custom theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This applies a consistent baseline style */}
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<InterviewForm />} />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;