import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  link?: boolean;
}

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    StyledButtonProps {
  text: string;
}

// #region styled-components
const chooseButtonBackGroundColor = (props: StyledButtonProps) => {
  const { secondary, success, danger, link } = props;
  let color = "#007bff";
  if (secondary) {
    color = "gray";
  } else if (success) {
    color = "green";
  } else if (danger) {
    color = "red";
  } else if (link) {
    color = "transparent";
  }
  return color;
};

const StyledButton = styled.button`
    background-color: bisque;
margin-left: 100px;
  /* background-color: ${chooseButtonBackGroundColor}; */
  padding: 20px;
  border: 1px solid brown;
  box-shadow: 3px 3px 3px brown;
  outline:none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${(props: StyledButtonProps) => (props.link ? "#007bff" : "brown")};
  &:active{
        transform: translateY(1px);

      }
  &:hover {
    text-decoration: ${(props: StyledButtonProps) =>
      props.link ? "underline" : "none"};
     
    background-color: burlywood;
  }
`;
// #endregion

function Button({ text, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{text}</StyledButton>;
}

export default Button;
