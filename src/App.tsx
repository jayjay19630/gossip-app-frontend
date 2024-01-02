import './App.css'
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    typography: {
      button: {
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: 'bold',
      }
    },
    palette: {
        primary: {
          main: '#ffca28',
          dark: '#ffb300'
        }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Home/>
    </ThemeProvider>
  );
}

export default App
