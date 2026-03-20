import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bolt as BoltIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Fab,
  Grid,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import { useMatchSetting } from '../../contexts/MatchSettingContext';

export const SettingPage = () => {
  const { playerCount, setPlayerCount, courtSelection, setCourtSelection } =
    useMatchSetting();
  const [formPlayerCount, setFormPlayerCount] = useState(playerCount);
  const [formCourtSelection, setFormCourtSelection] = useState(courtSelection);

  const navigate = useNavigate();

  const courts = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Stack spacing={4}>
          {/* Player Count Section */}
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography variant="h6">参加人数設定</Typography>
              <Box sx={{ textAlign: 'right' }}>
                <Typography
                  variant="h4"
                  color="primary"
                  component="span"
                  sx={{ fontWeight: 800 }}
                >
                  {formPlayerCount}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ ml: 1, verticalAlign: 'middle' }}
                >
                  PLAYERS
                </Typography>
              </Box>
            </Box>
            <Box sx={{ py: 0, px: 1 }}>
              <Slider
                value={formPlayerCount}
                onChange={(_, value) => setFormPlayerCount(value)}
                min={4}
                max={16}
                valueLabelDisplay="auto"
              />
            </Box>
          </Box>

          {/* Court Selection Section */}
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <Typography variant="overline" sx={{ fontWeight: 700 }}>
                使用コート選択
              </Typography>
              <Button
                size="small"
                onClick={() => {
                  setFormCourtSelection(['C1', 'C2']);
                }}
              >
                全選択
              </Button>
            </Box>
            <Grid container spacing={2}>
              {courts.map((court) => (
                <Grid size={4} key={`settings-court-${court}`}>
                  <Button
                    fullWidth
                    variant={
                      formCourtSelection.includes(court)
                        ? 'contained'
                        : 'outlined'
                    }
                    color={
                      formCourtSelection.includes(court) ? 'primary' : 'inherit'
                    }
                    sx={{
                      aspectRatio: '1/1',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                    }}
                    onClick={() =>
                      setFormCourtSelection((prev) =>
                        prev.includes(court)
                          ? prev.filter((c) => c !== court)
                          : [...prev, court],
                      )
                    }
                    disabled={['C3', 'C4', 'C5', 'C6'].includes(court)}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                      {court}
                    </Typography>
                    <Typography variant="caption">
                      {formCourtSelection.includes(court)
                        ? 'Active'
                        : 'Disabled'}
                    </Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>

      {/* Generate Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 100,
          left: 0,
          right: 0,
          px: 3,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Fab
          variant="extended"
          color="primary"
          sx={{ width: '100%', maxWidth: 400, height: 56 }}
          disabled={formCourtSelection.length === 0}
          onClick={() => {
            setPlayerCount(formPlayerCount);
            setCourtSelection(formCourtSelection);
            void navigate('/match');
          }}
        >
          試合開始
          <BoltIcon sx={{ ml: 1, color: 'secondary.main' }} />
        </Fab>
      </Box>
    </>
  );
};
