export type Row = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];

export type SudokuType = [Row, Row, Row, Row, Row, Row, Row, Row, Row];
export const SUDOKU: SudokuType = [
  [0, 0, 8, 3, 0, 5, 7, 0, 0],
  [0, 7, 1, 6, 0, 0, 2, 0, 5],
  [0, 0, 0, 2, 0, 0, 6, 3, 1],
  [0, 6, 2, 4, 9, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 5, 0, 3, 2, 8, 4, 0, 0],
  [4, 8, 6, 0, 0, 1, 0, 0, 0],
  [7, 0, 5, 0, 0, 4, 1, 2, 0],
  [0, 0, 9, 5, 0, 3, 4, 0, 0],
];
