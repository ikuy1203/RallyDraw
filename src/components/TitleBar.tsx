import { SportsTennis as BadmintonIcon } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const TitleBar = () => {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar>
        <BadmintonIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          RALLY DRAW
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
