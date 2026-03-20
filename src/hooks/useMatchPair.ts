import { MIN_PLAYERS } from '@/consts/players.const';

export const useMatchPair = (
  match: number,
  players: number,
  _courts: number,
) => {
  const data = matchPairs[players - MIN_PLAYERS];

  if (!data) return [];

  return data[match % data.length] || [];
};

export const getTotalMatches = (players: number) => {
  return matchPairs[players - MIN_PLAYERS]?.length ?? 0;
};

const matchPairs = [
  [
    // 4人用
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
    ],
  ],
  [
    // 5人用
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 2, p2: 3 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 2, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 4, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 3, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 2, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 1, p2: 2 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 5 },
        teamB: { p1: 1, p2: 2 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 4 },
        teamB: { p1: 1, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 3 },
        teamB: { p1: 4, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 2, p2: 3 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 5 },
        teamB: { p1: 1, p2: 3 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 1, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 1, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 5 },
        teamB: { p1: 3, p2: 4 },
      },
    ],
  ],
  [
    // 6人用
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 1, p2: 3 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 5 },
        teamB: { p1: 4, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 2, p2: 3 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 1, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 6 },
        teamB: { p1: 4, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 2, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 1, p2: 2 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 4 },
        teamB: { p1: 5, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 2, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 1, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 4, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 2, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 3 },
        teamB: { p1: 4, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 3, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 5 },
        teamB: { p1: 3, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 5, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 2, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 4, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 6 },
        teamB: { p1: 3, p2: 5 },
      },
    ],
  ],
  [
    // 7人用
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 1, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 3 },
        teamB: { p1: 5, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 2, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 7 },
        teamB: { p1: 4, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 5 },
        teamB: { p1: 1, p2: 3 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 5 },
        teamB: { p1: 6, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 2, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 2, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 3, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 7 },
        teamB: { p1: 1, p2: 2 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 4, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 7 },
        teamB: { p1: 3, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 5, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 6 },
        teamB: { p1: 4, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 6, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 3, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 2, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 4 },
        teamB: { p1: 1, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 2, p2: 3 },
      },
    ],
  ],
  [
    // 8人用
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 7, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 5, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 6, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 4, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 3 },
        teamB: { p1: 6, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 4, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 5 },
        teamB: { p1: 3, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 7 },
        teamB: { p1: 2, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 4, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 8 },
        teamB: { p1: 3, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 7 },
        teamB: { p1: 4, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 3, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 6 },
        teamB: { p1: 5, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 5, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 4 },
        teamB: { p1: 7, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 3, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 6, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 8 },
        teamB: { p1: 4, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 3 },
        teamB: { p1: 5, p2: 7 },
      },
    ],
  ],
  [
    // 9人用
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 7, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 9 },
        teamB: { p1: 3, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 6, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 7 },
        teamB: { p1: 6, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 3 },
        teamB: { p1: 5, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 7 },
        teamB: { p1: 5, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 4, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 7 },
        teamB: { p1: 8, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 2, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 7 },
        teamB: { p1: 4, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 8 },
        teamB: { p1: 1, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 7 },
        teamB: { p1: 3, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 8 },
        teamB: { p1: 3, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 5 },
        teamB: { p1: 4, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 7, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 8 },
        teamB: { p1: 2, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 5 },
        teamB: { p1: 6, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 8, p2: 9 },
        teamB: { p1: 4, p2: 6 },
      },
    ],
  ],
  [
    // 10人用
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 7, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 9, p2: 10 },
        teamB: { p1: 1, p2: 3 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 5, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 6, p2: 9 },
        teamB: { p1: 8, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 3, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 6 },
        teamB: { p1: 4, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 8 },
        teamB: { p1: 5, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 6 },
        teamB: { p1: 7, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 8 },
        teamB: { p1: 4, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 5, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 3 },
        teamB: { p1: 7, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 6, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 5 },
        teamB: { p1: 3, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 7 },
        teamB: { p1: 8, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 2, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 4, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 7 },
        teamB: { p1: 2, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 6, p2: 10 },
        teamB: { p1: 3, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 5 },
        teamB: { p1: 7, p2: 9 },
      },
    ],
  ],
  [
    // 11人用
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 7, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 9, p2: 10 },
        teamB: { p1: 1, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 3 },
        teamB: { p1: 5, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 6 },
        teamB: { p1: 8, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 10, p2: 11 },
        teamB: { p1: 2, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 7 },
        teamB: { p1: 4, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 6 },
        teamB: { p1: 8, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 10 },
        teamB: { p1: 4, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 9 },
        teamB: { p1: 3, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 8, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 7 },
        teamB: { p1: 9, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 5 },
        teamB: { p1: 1, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 10 },
        teamB: { p1: 6, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 11 },
        teamB: { p1: 4, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 9 },
        teamB: { p1: 3, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 6, p2: 10 },
        teamB: { p1: 7, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 8 },
        teamB: { p1: 3, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 5, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 6, p2: 11 },
        teamB: { p1: 3, p2: 8 },
      },
    ],
  ],
  [
    // 12人用
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 7, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 9, p2: 10 },
        teamB: { p1: 11, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 5, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 6, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 8, p2: 11 },
        teamB: { p1: 10, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 4, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 7 },
        teamB: { p1: 6, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 10 },
        teamB: { p1: 8, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 9 },
        teamB: { p1: 7, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 5 },
        teamB: { p1: 2, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 6 },
        teamB: { p1: 8, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 9, p2: 11 },
        teamB: { p1: 2, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 7 },
        teamB: { p1: 6, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 8 },
        teamB: { p1: 4, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 11 },
        teamB: { p1: 1, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 9 },
        teamB: { p1: 3, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 8 },
        teamB: { p1: 7, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 12 },
        teamB: { p1: 2, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 11 },
        teamB: { p1: 5, p2: 10 },
      },
    ],
  ],
  [
    // 13人用
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 7, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 9, p2: 10 },
        teamB: { p1: 1, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 12, p2: 13 },
        teamB: { p1: 2, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 6 },
        teamB: { p1: 7, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 8 },
        teamB: { p1: 10, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 3, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 11 },
        teamB: { p1: 4, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 7, p2: 10 },
        teamB: { p1: 11, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 8, p2: 9 },
        teamB: { p1: 1, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 3 },
        teamB: { p1: 6, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 7 },
        teamB: { p1: 5, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 6, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 8, p2: 11 },
        teamB: { p1: 3, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 9 },
        teamB: { p1: 8, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 7 },
        teamB: { p1: 10, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 9, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 4, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 7 },
        teamB: { p1: 1, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 11, p2: 12 },
        teamB: { p1: 4, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 9 },
        teamB: { p1: 10, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 8 },
        teamB: { p1: 6, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 7, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 5, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 6 },
        teamB: { p1: 8, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 7, p2: 11 },
        teamB: { p1: 9, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 10 },
        teamB: { p1: 3, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 5 },
        teamB: { p1: 9, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 10 },
        teamB: { p1: 5, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 6, p2: 7 },
        teamB: { p1: 1, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 11 },
        teamB: { p1: 2, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 9 },
        teamB: { p1: 6, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 9 },
        teamB: { p1: 5, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 7, p2: 13 },
        teamB: { p1: 8, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 6 },
        teamB: { p1: 5, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 7 },
        teamB: { p1: 4, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 8 },
        teamB: { p1: 4, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 6, p2: 9 },
        teamB: { p1: 3, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 12 },
        teamB: { p1: 1, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 13 },
        teamB: { p1: 8, p2: 9 },
      },
    ],
  ],
  [
    // 14人用（2コート）
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 7, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 9, p2: 10 },
        teamB: { p1: 1, p2: 11 },
      },
      {
        teamA: { p1: 12, p2: 13 },
        teamB: { p1: 2, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 9, p2: 12 },
      },
      {
        teamA: { p1: 4, p2: 6 },
        teamB: { p1: 10, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 7, p2: 11 },
        teamB: { p1: 2, p2: 3 },
      },
      {
        teamA: { p1: 8, p2: 14 },
        teamB: { p1: 1, p2: 4 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 13 },
        teamB: { p1: 8, p2: 11 },
      },
      {
        teamA: { p1: 6, p2: 9 },
        teamB: { p1: 7, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 10 },
        teamB: { p1: 4, p2: 5 },
      },
      {
        teamA: { p1: 1, p2: 12 },
        teamB: { p1: 3, p2: 6 },
      },
    ],
    [
      {
        teamA: { p1: 7, p2: 10 },
        teamB: { p1: 8, p2: 12 },
      },
      {
        teamA: { p1: 9, p2: 11 },
        teamB: { p1: 13, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 7, p2: 13 },
      },
      {
        teamA: { p1: 2, p2: 6 },
        teamB: { p1: 8, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 10 },
        teamB: { p1: 5, p2: 14 },
      },
      {
        teamA: { p1: 4, p2: 11 },
        teamB: { p1: 6, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 7 },
        teamB: { p1: 2, p2: 9 },
      },
      {
        teamA: { p1: 10, p2: 11 },
        teamB: { p1: 12, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 8 },
        teamB: { p1: 1, p2: 13 },
      },
      {
        teamA: { p1: 4, p2: 7 },
        teamB: { p1: 5, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 6, p2: 11 },
        teamB: { p1: 3, p2: 14 },
      },
      {
        teamA: { p1: 2, p2: 12 },
        teamB: { p1: 4, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 10 },
        teamB: { p1: 6, p2: 14 },
      },
      {
        teamA: { p1: 2, p2: 13 },
        teamB: { p1: 5, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 9 },
        teamB: { p1: 4, p2: 13 },
      },
      {
        teamA: { p1: 7, p2: 12 },
        teamB: { p1: 8, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 5, p2: 8 },
      },
      {
        teamA: { p1: 2, p2: 11 },
        teamB: { p1: 3, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 14 },
        teamB: { p1: 5, p2: 12 },
      },
      {
        teamA: { p1: 9, p2: 13 },
        teamB: { p1: 6, p2: 10 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 11, p2: 12 },
      },
      {
        teamA: { p1: 2, p2: 8 },
        teamB: { p1: 9, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 10 },
        teamB: { p1: 2, p2: 5 },
      },
      {
        teamA: { p1: 6, p2: 7 },
        teamB: { p1: 3, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 8 },
        teamB: { p1: 11, p2: 14 },
      },
      {
        teamA: { p1: 7, p2: 9 },
        teamB: { p1: 4, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 10 },
        teamB: { p1: 3, p2: 12 },
      },
      {
        teamA: { p1: 11, p2: 13 },
        teamB: { p1: 6, p2: 8 },
      },
    ],
  ],
  [
    // 15人用（2コート）
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 7, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 9, p2: 10 },
        teamB: { p1: 11, p2: 12 },
      },
      {
        teamA: { p1: 13, p2: 14 },
        teamB: { p1: 1, p2: 15 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 5 },
        teamB: { p1: 9, p2: 13 },
      },
      {
        teamA: { p1: 3, p2: 6 },
        teamB: { p1: 10, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 7 },
        teamB: { p1: 1, p2: 11 },
      },
      {
        teamA: { p1: 8, p2: 12 },
        teamB: { p1: 2, p2: 15 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 11, p2: 15 },
      },
      {
        teamA: { p1: 6, p2: 13 },
        teamB: { p1: 4, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 7, p2: 9 },
        teamB: { p1: 2, p2: 14 },
      },
      {
        teamA: { p1: 8, p2: 10 },
        teamB: { p1: 1, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 11 },
        teamB: { p1: 8, p2: 13 },
      },
      {
        teamA: { p1: 4, p2: 6 },
        teamB: { p1: 9, p2: 15 },
      },
    ],
    [
      {
        teamA: { p1: 7, p2: 10 },
        teamB: { p1: 13, p2: 15 },
      },
      {
        teamA: { p1: 12, p2: 14 },
        teamB: { p1: 4, p2: 5 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 7, p2: 12 },
      },
      {
        teamA: { p1: 2, p2: 6 },
        teamB: { p1: 10, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 8, p2: 9 },
        teamB: { p1: 4, p2: 14 },
      },
      {
        teamA: { p1: 5, p2: 13 },
        teamB: { p1: 2, p2: 11 },
      },
    ],
    [
      {
        teamA: { p1: 7, p2: 15 },
        teamB: { p1: 3, p2: 8 },
      },
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 9, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 5, p2: 10 },
        teamB: { p1: 12, p2: 15 },
      },
      {
        teamA: { p1: 11, p2: 14 },
        teamB: { p1: 6, p2: 7 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 3, p2: 10 },
      },
      {
        teamA: { p1: 1, p2: 13 },
        teamB: { p1: 8, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 9, p2: 11 },
        teamB: { p1: 4, p2: 8 },
      },
      {
        teamA: { p1: 2, p2: 7 },
        teamB: { p1: 12, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 10 },
        teamB: { p1: 6, p2: 15 },
      },
      {
        teamA: { p1: 3, p2: 9 },
        teamB: { p1: 5, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 8 },
        teamB: { p1: 6, p2: 12 },
      },
      {
        teamA: { p1: 4, p2: 10 },
        teamB: { p1: 7, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 9 },
        teamB: { p1: 5, p2: 11 },
      },
      {
        teamA: { p1: 2, p2: 3 },
        teamB: { p1: 14, p2: 15 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 15 },
        teamB: { p1: 5, p2: 7 },
      },
      {
        teamA: { p1: 6, p2: 9 },
        teamB: { p1: 3, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 12 },
        teamB: { p1: 2, p2: 10 },
      },
      {
        teamA: { p1: 8, p2: 11 },
        teamB: { p1: 6, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 12 },
        teamB: { p1: 7, p2: 14 },
      },
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 11, p2: 13 },
      },
    ],
  ],
  [
    // 16人用（2コート）
    [
      {
        teamA: { p1: 1, p2: 2 },
        teamB: { p1: 3, p2: 4 },
      },
      {
        teamA: { p1: 5, p2: 6 },
        teamB: { p1: 7, p2: 8 },
      },
    ],
    [
      {
        teamA: { p1: 9, p2: 10 },
        teamB: { p1: 11, p2: 12 },
      },
      {
        teamA: { p1: 13, p2: 14 },
        teamB: { p1: 15, p2: 16 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 5 },
        teamB: { p1: 9, p2: 13 },
      },
      {
        teamA: { p1: 2, p2: 6 },
        teamB: { p1: 10, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 7 },
        teamB: { p1: 11, p2: 15 },
      },
      {
        teamA: { p1: 4, p2: 8 },
        teamB: { p1: 12, p2: 16 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 6 },
        teamB: { p1: 11, p2: 16 },
      },
      {
        teamA: { p1: 2, p2: 5 },
        teamB: { p1: 12, p2: 15 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 8 },
        teamB: { p1: 9, p2: 14 },
      },
      {
        teamA: { p1: 4, p2: 7 },
        teamB: { p1: 10, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 12 },
        teamB: { p1: 7, p2: 14 },
      },
      {
        teamA: { p1: 2, p2: 11 },
        teamB: { p1: 8, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 5 },
        teamB: { p1: 10, p2: 16 },
      },
      {
        teamA: { p1: 4, p2: 6 },
        teamB: { p1: 9, p2: 15 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 8 },
        teamB: { p1: 10, p2: 15 },
      },
      {
        teamA: { p1: 2, p2: 7 },
        teamB: { p1: 9, p2: 16 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 6 },
        teamB: { p1: 12, p2: 13 },
      },
      {
        teamA: { p1: 4, p2: 5 },
        teamB: { p1: 11, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 7 },
        teamB: { p1: 9, p2: 11 },
      },
      {
        teamA: { p1: 2, p2: 8 },
        teamB: { p1: 10, p2: 12 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 13 },
        teamB: { p1: 4, p2: 15 },
      },
      {
        teamA: { p1: 5, p2: 14 },
        teamB: { p1: 6, p2: 16 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 3 },
        teamB: { p1: 2, p2: 14 },
      },
      {
        teamA: { p1: 5, p2: 7 },
        teamB: { p1: 8, p2: 15 },
      },
    ],
    [
      {
        teamA: { p1: 4, p2: 16 },
        teamB: { p1: 9, p2: 12 },
      },
      {
        teamA: { p1: 6, p2: 10 },
        teamB: { p1: 11, p2: 13 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 4 },
        teamB: { p1: 5, p2: 10 },
      },
      {
        teamA: { p1: 2, p2: 13 },
        teamB: { p1: 7, p2: 16 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 9 },
        teamB: { p1: 8, p2: 11 },
      },
      {
        teamA: { p1: 6, p2: 12 },
        teamB: { p1: 14, p2: 15 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 13 },
        teamB: { p1: 8, p2: 16 },
      },
      {
        teamA: { p1: 2, p2: 4 },
        teamB: { p1: 6, p2: 9 },
      },
    ],
    [
      {
        teamA: { p1: 3, p2: 10 },
        teamB: { p1: 7, p2: 15 },
      },
      {
        teamA: { p1: 5, p2: 11 },
        teamB: { p1: 12, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 2, p2: 9 },
        teamB: { p1: 5, p2: 15 },
      },
      {
        teamA: { p1: 4, p2: 10 },
        teamB: { p1: 8, p2: 14 },
      },
    ],
    [
      {
        teamA: { p1: 1, p2: 11 },
        teamB: { p1: 3, p2: 16 },
      },
      {
        teamA: { p1: 6, p2: 13 },
        teamB: { p1: 7, p2: 12 },
      },
    ],
  ],
];
