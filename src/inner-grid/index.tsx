import React from "react";
import Cell from "../cell";
import styled from "styled-components";
import { Sudoku } from "../utils/helpers";

interface InnerGridProps {
  sudoku: Sudoku;
  gridNumber: number;
}

const InnerGridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  border: 1px solid black;
`;

const InnerGrid = ({ sudoku, gridNumber }: InnerGridProps) => {
  const startingCell = [Math.floor(gridNumber / 3) * 3, (gridNumber % 3) * 3];
  return (
    <InnerGridContainer>
      {Array.from({ length: 9 }).map((_, index) => {
        const relativeCell = [Math.floor(index / 3), index % 3];
        const rowNumber = startingCell[0] + relativeCell[0];
        const columnNumber = startingCell[1] + relativeCell[1];
        return (
          <Cell
            key={index}
            sudoku={sudoku}
            rowNumber={rowNumber}
            columnNumber={columnNumber}
          />
        );
      })}
    </InnerGridContainer>
  );
};

export default InnerGrid;
