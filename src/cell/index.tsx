import React from "react";
import styled from "styled-components";

const Input = styled.input`
  position: relative;
  height: 50px;
  width: 50px;
  border: 1px solid brown;
  background-color: bisque;
  font-size: 20px;
  text-align: center;
  outline: none;
  &:focus {
    background-color: burlywood;
    border: 1px solid burlywood;
  }
`;

interface CellProps {
  preset?: number;
}
const Cell = ({ preset }: CellProps) => {
  const [value, setValue] = React.useState("");
  const onCellInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const result = inputValue.match(/^[1-9]+$/g);
    if (result || inputValue === "") {
      const lastCharacter = inputValue ? inputValue[inputValue.length - 1] : "";
      setValue(lastCharacter);
    }
  };

  return (
    <Input
      type="text"
      onChange={onCellInput}
      value={preset || value}
      disabled={Boolean(preset)}
    ></Input>
  );
};
export default Cell;
