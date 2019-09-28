import React from "react";
import Button from "../button";

interface SampleButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: number;
}

const SampleButton = ({ value, onClick }: SampleButtonProps) => {
  return <Button text={`Value is ${value}`} onClick={onClick} />;
};
export default SampleButton;
