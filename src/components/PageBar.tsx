import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import { NavigationBar } from './NavigationBar';
import { TitleBar } from './TitleBar';

export const PageBar = () => {
  return (
    <>
      <Box sx={{ pb: 10, bgcolor: 'background.default', minHeight: '100vh' }}>
        <TitleBar />
        <Outlet />
        <NavigationBar />
      </Box>
    </>
  );
};
