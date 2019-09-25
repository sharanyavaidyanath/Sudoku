import React from "react";
import OuterGrid from "./outer-grid";
import styled from "styled-components";
import { SUDOKU } from "./utils/constants";
import { Sudoku } from "./utils/helpers";

const Container = styled.div`
  margin: 200px;
`;

const App: React.FC = () => {
  const sudoku = new Sudoku(SUDOKU);
  return (
    <Container>
      <OuterGrid sudoku={sudoku} />
    </Container>
  );
};

export default App;
