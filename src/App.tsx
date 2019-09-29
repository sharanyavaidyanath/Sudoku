import React from "react";
import styled from "styled-components";
import OuterGrid from "./outer-grid";
import { SudokuProvider } from "./utils/sudoku";

const Container = styled.div`
  margin: 200px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <SudokuProvider>
        <OuterGrid></OuterGrid>
      </SudokuProvider>
    </Container>
  );
};

export default App;
