import './App.css'
import { Home } from './pages/Home';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';

function App() {
  
  const theme = createTheme({
    typography: {
      button: {
        fontFamily: 'Arial',
        fontSize: 18,
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
    <Routes>
      <Route path='/' element={<ThemeProvider theme={theme}><Home/></ThemeProvider>}/>
      <Route path='/signup' element={<ThemeProvider theme={theme}><Signup/></ThemeProvider>}/>
      <Route path='/login' element={<ThemeProvider theme={theme}><Login/></ThemeProvider>}/>
    </Routes>
  );
}

export default App
