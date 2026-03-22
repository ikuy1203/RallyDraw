import { AppBar, Toolbar, Typography } from '@mui/material';
import BadmintonIcon from '@/assets/icon.png';

export const TitleBar = () => {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar>
        <img
          src={BadmintonIcon}
          alt="Badminton Icon"
          style={{ marginRight: 8, width: 24, height: 24 }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          RALLY DRAW
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
