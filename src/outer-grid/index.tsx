import React from "react";
import styled from "styled-components";
import InnerGrid from "../inner-grid";
import { Sudoku } from "../utils/helpers";

interface OuterGridProps {
  sudoku: Sudoku;
}

const OuterGridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  border: 1px solid black;
`;

const OuterGrid = ({ sudoku }: OuterGridProps) => {
  return (
    <OuterGridContainer>
      {Array.from({ length: 9 }).map((_, index) => (
        <InnerGrid key={index} sudoku={sudoku} gridNumber={index} />
      ))}
    </OuterGridContainer>
  );
};

export default OuterGrid;
