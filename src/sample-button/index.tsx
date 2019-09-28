import React, { useContext } from "react";
import Button from "../button";
import { ButtonContext } from "../App";

interface SampleButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: number;
}

const SampleButton = () => {
  const { value, onClick } = useContext(ButtonContext) || {
    value: 0,
    onClick: () => {},
  };
  return <Button text={`Value is ${value}`} onClick={onClick} />;
};
export default SampleButton;
