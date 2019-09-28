import React, { useContext } from "react";
import Button from "../button";
import {
  ButtonValueContext,
  ButtonClickContext,
} from "../utils/button-context";

interface SampleButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: number;
}

const SampleButton = () => {
  const value = useContext(ButtonValueContext);
  const onClick = useContext(ButtonClickContext);
  return <Button text={`Value is ${value}`} onClick={onClick} />;
};
export default SampleButton;
