import React from "react";
import Button from "../button";
import { useButtonValue, useButtonClick } from "../utils/button-context";

interface SampleButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: number;
}

const SampleButton = () => {
  const value = useButtonValue();
  const onClick = useButtonClick();

  return <Button text={`Value is ${value}`} onClick={onClick} />;
};
export default SampleButton;
