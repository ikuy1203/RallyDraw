import { useLocation, useNavigate } from 'react-router-dom';
import {
  Leaderboard as LeaderboardIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

export const NavigationBar = () => {
  const location = useLocation();

  const navValue = location.pathname;
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={navValue}
        onChange={(_, newValue) => void navigate(newValue as string)}
      >
        <BottomNavigationAction
          label="対戦表"
          value="/match"
          icon={<LeaderboardIcon />}
        />
        <BottomNavigationAction
          label="設定"
          value="/settings"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};
