import React, { useState } from "react";
import styled from "styled-components";
import ButtonContainer from "./button-container";
import { ButtonValueContext, ButtonClickContext } from "./utils/button-context";

const Container = styled.div`
  margin: 200px;
`;

const App: React.FC = () => {
  const [value, setValue] = useState(0);
  const onClick = () => setValue(value + 1);
  return (
    <Container>
      <ButtonValueContext.Provider value={value}>
        <ButtonClickContext.Provider value={onClick}>
          <ButtonContainer numberOfButtons={8} />
          <ButtonContainer numberOfButtons={5} />
        </ButtonClickContext.Provider>
      </ButtonValueContext.Provider>
    </Container>
  );
};

export default App;
