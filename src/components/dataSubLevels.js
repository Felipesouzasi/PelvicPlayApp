// Classe dedicada para dinamização dos niveis e subniveis
export const subLevelsByLevels = {
  1: [1],
  2: [2],
  3: [1, 2],
  4: [1, 2, 3, 4],
  5: [1, 2, 3, 4],
  6: [1, 3, 4, 6],
  7: [5, 6],
  8: [7],
  9: [1],
  10: [2],
  11: [1, 2],
  12: [1, 2, 3, 4],
  13: [8],
  14: [6],
  15: [5, 6],
  16: [7],
};

export const levelsByWeek = {
  1: [1, 2],
  2: [3, 4],
  3: [5, 6],
  4: [7, 8],
  5: [9, 10],
  6: [11, 12],
  7: [13, 14],
  8: [15, 16],
};