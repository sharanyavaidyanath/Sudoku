import React, { useState } from "react";
import styled from "styled-components";
import ButtonContainer from "./button-container";
import { ButtonProvider } from "./utils/button-context";

const Container = styled.div`
  margin: 200px;
`;

const App: React.FC = () => {
  const [value, setValue] = useState(0);
  const onClick = () => setValue(value + 1);
  return (
    <Container>
      <ButtonProvider value={value} onClick={onClick}>
        <ButtonContainer numberOfButtons={8} />
        <ButtonContainer numberOfButtons={5} />
      </ButtonProvider>
    </Container>
  );
};

export default App;
