import React from "react";
import OuterGrid from "./outer-grid";
import styled from "styled-components";
import { SUDOKU } from "./utils/constants";

const Container = styled.div`
  margin: 200px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <OuterGrid sudoku={SUDOKU} />
    </Container>
  );
};

export default App;
