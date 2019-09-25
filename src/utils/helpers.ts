import { SudokuType } from "./constants";

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
      top: (gridNumber % 3) * 3,
      left: 3 * Math.floor(gridNumber / 3),
      bottom: (gridNumber % 3) * 3 + 2,
      right: Math.ceil((gridNumber + 1) / 3) * 3 - 1,
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
      .filter((_, rowNumber) => rowNumber >= left && rowNumber <= right)
      .map(row =>
        row.filter(
          (_, columnNumber) => columnNumber >= top && columnNumber <= bottom,
        ),
      );
  }

  getGrid(rowNumber: number, columnNumber: number) {
    for (let gridNumber = 0; gridNumber < 9; gridNumber++) {
      const { left, right, top, bottom } = this.getGridBoundary(gridNumber);
      if (
        rowNumber >= left &&
        rowNumber <= right &&
        columnNumber >= top &&
        columnNumber <= bottom
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
