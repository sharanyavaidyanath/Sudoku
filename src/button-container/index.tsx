import React from "react";
import SampleButton from "../sample-button";
import styled from "styled-components";
interface ContainerProps {
  numberOfButtons: number;
}
interface ButtonContainerProps {
  value: number;
  onClick: () => void;
}

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: ${props =>
    `repeat(${Math.ceil(props.numberOfButtons / 2)} , auto)`};
  grid-gap: 20px;
  padding: 20px;
  justify-content: start;
`;

const ButtonContainer = ({
  numberOfButtons,
  value,
  onClick,
}: ButtonContainerProps & ContainerProps) => {
  return (
    <Container numberOfButtons={numberOfButtons}>
      {Array.from({ length: numberOfButtons }).map((_, index) => (
        <SampleButton key={index} value={value} onClick={onClick} />
      ))}
    </Container>
  );
};

export default ButtonContainer;
