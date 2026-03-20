import React, { useContext } from 'react';

interface MatchSettingContextType {
  playerCount: number;
  setPlayerCount: (count: number) => void;
  courtSelection: string[];
  setCourtSelection: (courts: string[]) => void;
}

export const MatchSettingContext = React.createContext<MatchSettingContextType>(
  {} as MatchSettingContextType,
);

export const useMatchSetting = () => {
  const context = useContext(MatchSettingContext);

  if (!context) {
    throw new Error(
      'useMatchSetting must be used within a MatchSettingProvider',
    );
  }

  return context;
};
