import React from "react";
import styled from "styled-components";
import OuterGrid from "./outer-grid";
import { Sudoku } from "./utils/helpers";
import { SUDOKU } from "./utils/constants";

const Container = styled.div`
  margin: 200px;
`;

const sudoku = new Sudoku(SUDOKU);

const App: React.FC = () => {
  return (
    <Container>
      <OuterGrid sudoku={sudoku}></OuterGrid>
    </Container>
  );
};

export default App;
