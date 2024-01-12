import './App.css'
import { Home } from './pages/Home';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Forum } from './pages/Forum';
import { Create } from './pages/CreatePost';
import { View } from './pages/ViewPost';
import { Edit } from './pages/EditPost';

function App() {
  
  const theme = createTheme({
    typography: {
      button: {
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: 'bold',
      },
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
      <Route path='signup' element={<ThemeProvider theme={theme}><Signup/></ThemeProvider>}/>
      <Route path='login' element={<ThemeProvider theme={theme}><Login/></ThemeProvider>}/>
      <Route path='posts'>
        <Route path='new' element={<ThemeProvider theme={theme}><Create/></ThemeProvider>}/>
        <Route path=':postId'>
          <Route path='edit' element={<ThemeProvider theme={theme}><Edit/></ThemeProvider>}/>
          <Route path='' element={<ThemeProvider theme={theme}><View/></ThemeProvider>}/>
        </Route>
        <Route path='' element={<ThemeProvider theme={theme}><Forum/></ThemeProvider>}/>
      </Route>
    </Routes>
  );
}

export default App
