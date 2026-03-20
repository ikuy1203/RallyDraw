import type { ReactNode } from 'react';
import { useState } from 'react';
import { MatchSettingContext } from '@/contexts/MatchSettingContext';

export const MatchSettingProvider = ({ children }: { children: ReactNode }) => {
  const [playerCount, setPlayerCount] = useState<number>(8);
  const [courtSelection, setCourtSelection] = useState<string[]>(['C1']);
  const [round, setRound] = useState<number>(0);

  return (
    <MatchSettingContext
      value={{
        playerCount,
        setPlayerCount,
        courtSelection,
        setCourtSelection,
        round,
        setRound,
      }}
    >
      {children}
    </MatchSettingContext>
  );
};
