import React, { useState } from "react";
import styled from "styled-components";
import ButtonContainer from "./button-container";

const Container = styled.div`
  margin: 200px;
`;

const App: React.FC = () => {
  const [value, setValue] = useState(0);
  const onClick = () => setValue(value + 1);
  return (
    <Container>
      <ButtonContainer numberOfButtons={8} onClick={onClick} value={value} />
      <ButtonContainer numberOfButtons={5} onClick={onClick} value={value} />
    </Container>
  );
};

export default App;
