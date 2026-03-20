import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { useMatchSetting } from '@/contexts/MatchSettingContext';
import { getTotalMatches, useMatchPair } from '@/hooks/useMatchPair';

export const MatchPage = () => {
  const { playerCount, courtSelection, round, setRound } = useMatchSetting();
  const matchPairs = useMatchPair(round, playerCount, courtSelection.length);
  const totalMatches = getTotalMatches(playerCount);

  return (
    <Container maxWidth="sm" sx={{ py: 3 }}>
      {/* Round Selection Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={round}
          onChange={(_, newValue: number) => {
            setRound(newValue);
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {Array.from({ length: totalMatches }, (_, index) => (
            <Tab
              key={`round-tab-${playerCount}-${index}`}
              label={`Round ${index + 1}`}
              value={index}
            />
          ))}
        </Tabs>
      </Box>

      {/* Main Matches (Court Cards) */}
      <Box sx={{ mb: 4 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Typography variant="h6" color="primary" fontWeight="bold">
            LIVE COURTS
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {matchPairs.length} Matches Active
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {matchPairs.map((match, index: number) => (
            <Card key={`court-card-${playerCount}-${index}`} variant="outlined">
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={`Court ${index + 1}`}
                    size="small"
                    color="secondary"
                    sx={{ fontWeight: 'bold' }}
                  />
                </Box>
                <Grid container alignItems="center" spacing={2}>
                  <Grid size={5}>
                    <Typography
                      align="center"
                      variant="subtitle1"
                      fontWeight="bold"
                    >
                      Player {match.teamA.p1}
                    </Typography>
                    <Typography
                      align="center"
                      variant="subtitle1"
                      fontWeight="bold"
                    >
                      Player {match.teamA.p2}
                    </Typography>
                  </Grid>
                  <Grid size={2}>
                    <Typography
                      align="center"
                      color="text.disabled"
                      variant="h6"
                    >
                      VS
                    </Typography>
                  </Grid>
                  <Grid size={5}>
                    <Typography
                      align="center"
                      variant="subtitle1"
                      fontWeight="bold"
                    >
                      Player {match.teamB.p1}
                    </Typography>
                    <Typography
                      align="center"
                      variant="subtitle1"
                      fontWeight="bold"
                    >
                      Player {match.teamB.p2}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
      <Button
        fullWidth
        variant="contained"
        size="large"
        onClick={() => setRound((prev) => (prev + 1) % totalMatches)}
      >
        Next Round
      </Button>
    </Container>
  );
};
