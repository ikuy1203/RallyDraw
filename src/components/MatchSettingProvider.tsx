import { useState } from 'react';
import type { ReactNode } from 'react';
import { MatchSettingContext } from '../contexts/MatchSettingContext';

export const MatchSettingProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [playerCount, setPlayerCount] = useState<number>(8);
  const [courtSelection, setCourtSelection] = useState<string[]>(['C1']);

  return (
    <MatchSettingContext.Provider
      value={{ playerCount, setPlayerCount, courtSelection, setCourtSelection }}
    >
      {children}
    </MatchSettingContext.Provider>
  );
};
