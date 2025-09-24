// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3985FF', // A vibrant, modern blue for accents
    },
    background: {
      default: '#263238', // UPDATED: Lighter charcoal-grey background
      paper: '#37474F',   // UPDATED: Lighter shade for cards and surfaces
    },
    text: {
      primary: '#F0F0F0',
      secondary: '#B0BEC0',
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                border: '1px solid #455a64' // UPDATED: Border color to match the new palette
            }
        }
    }
  },
});

export default theme;