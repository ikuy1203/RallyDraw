import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { MatchSettingProvider } from '@/components/MatchSettingProvider';
import { PageBar } from '@/components/PageBar';
import { MatchPage } from '@/pages/match';
import { SettingPage } from '@/pages/setting';

// Standard MUI theme with some brand color adjustments
const theme = createTheme({
  palette: {
    primary: {
      main: '#00113a',
    },
    secondary: {
      main: '#c3f400',
    },
    background: {
      default: '#faf8ff',
    },
  },
  typography: {
    h6: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MatchSettingProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PageBar />}>
              <Route path="" element={<Navigate replace to="settings" />} />
              <Route path="match" element={<MatchPage />} />
              <Route path="settings" element={<SettingPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MatchSettingProvider>
    </ThemeProvider>
  );
};

export default App;
