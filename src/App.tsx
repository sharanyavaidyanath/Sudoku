import React from "react";
import OuterGrid from "./outer-grid";
import styled from "styled-components";

const Container = styled.div`
  margin: 200px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <OuterGrid />
    </Container>
  );
};

export default App;
