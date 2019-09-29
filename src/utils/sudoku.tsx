import React, { createContext, useContext } from "react";

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

const SUDOKU: SudokuType = [
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

const ALL_NUMBERS = Array.from({ length: 9 }, (_, index) => index + 1); /*?*/

export class Sudoku {
  value: SudokuType;
  constructor(grid: SudokuType) {
    if (Array.isArray(grid) && grid.length === 9) {
      if (grid.filter(row => row.length !== 9).length === 0) {
        this.value = grid;
        return;
      }
    }
    throw Error("Not a valid sudoku type");
  }

  getRow(rowNumber: number) {
    return this.value[rowNumber];
  }

  getColumn(columnNumber: number) {
    return this.value.map(row => row[columnNumber]);
  }

  getGridBoundary(gridNumber: number) {
    return {
      left: (gridNumber % 3) * 3,
      right: (gridNumber % 3) * 3 + 2,
      top: 3 * Math.floor(gridNumber / 3),
      bottom: Math.ceil((gridNumber + 1) / 3) * 3 - 1,
    };
  }

  getGridNumbers({
    left,
    right,
    top,
    bottom,
  }: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  }) {
    return this.value
      .filter((_, rowNumber) => rowNumber >= top && rowNumber <= bottom)
      .map(row =>
        row.filter(
          (_, columnNumber) => columnNumber >= left && columnNumber <= right,
        ),
      );
  }

  getGrid(rowNumber: number, columnNumber: number) {
    for (let gridNumber = 0; gridNumber < 9; gridNumber++) {
      const { left, right, top, bottom } = this.getGridBoundary(gridNumber);
      if (
        rowNumber >= top &&
        rowNumber <= bottom &&
        columnNumber >= left &&
        columnNumber <= right
      ) {
        return this.getGridNumbers({ left, right, top, bottom }).flat();
      }
    }
    return [];
  }

  getPossibilities(rowNumber: number, columnNumber: number) {
    const row: number[] = this.getRow(rowNumber);
    const column = this.getColumn(columnNumber);
    const grid = this.getGrid(rowNumber, columnNumber);

    const arrays = [row, column, grid];
    const conflictingNumbers = new Set(arrays.flat());
    return ALL_NUMBERS.filter(value => !conflictingNumbers.has(value));
  }

  isValid(entry: number, rowNumber: number, columnNumber: number) {
    const possibilities = this.getPossibilities(rowNumber, columnNumber);
    return possibilities.indexOf(entry) !== -1;
  }
}

const sudokuValue = new Sudoku(SUDOKU);
const SudokuContext = createContext(sudokuValue);

export const SudokuProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <SudokuContext.Provider value={sudokuValue}>
      {children}
    </SudokuContext.Provider>
  );
};

export const useSudoku = () => {
  const sudoku = useContext(SudokuContext);
  return sudoku;
};
