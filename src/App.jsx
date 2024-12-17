import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import ToolBar from './Components/AppComponents/AppBar';
import { SideBar, DrawerHeader } from './Components/AppComponents/SideNav';
import { Route, Routes } from 'react-router';
import Dashboard from './routes/Dashboard';
import { theme } from './Components/UtilityComponents/MuiPallete';
import { ThemeProvider } from '@mui/material/styles';

export default function App() {
  const [open, setOpen] = React.useState(false);

  const toggleSideBar = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <ToolBar toggleSideBar={toggleSideBar} open={open} />
        <SideBar toggleSideBar={toggleSideBar} open={open} />
        <Box component="main" sx={{ width: '100%' }}>
          <DrawerHeader sx={{ display: { sm: 'none' } }} />
          <Box className='app' sx={{ width: '100%', padding: { xs: '12px', md: '24px'} }}>
            <Routes>
              <Route index element={<Dashboard />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}