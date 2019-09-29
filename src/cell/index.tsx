import React from "react";
import styled from "styled-components";
import { useSudoku } from "../utils/sudoku";

interface InputProps {
  invalid: boolean;
}

const Input = styled.input<InputProps>`
  position: relative;
  height: 50px;
  width: 50px;
  border: 1px solid brown;
  background-color: ${props => (props.invalid ? "red" : "bisque")};
  font-size: 20px;
  text-align: center;
  outline: none;
  &:focus {
    background-color: ${props => (props.invalid ? "red" : "burlywood")};
    border: 1px solid burlywood;
  }
`;

interface CellProps {
  rowNumber: number;
  columnNumber: number;
}

const Cell = ({ rowNumber, columnNumber }: CellProps) => {
  const sudoku = useSudoku();
  const initialRender = React.useRef(true);
  const [valid, setValid] = React.useState(true);
  const [value, setValue] = React.useState(
    (sudoku.value[rowNumber][columnNumber] || "").toString(),
  );

  React.useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setValid(
        value ? sudoku.isValid(Number(value), rowNumber, columnNumber) : true,
      );
    }
  }, [value, columnNumber, rowNumber, sudoku]);

  const isPreset = Boolean(sudoku.value[rowNumber][columnNumber]);
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
      value={value}
      disabled={isPreset}
      invalid={!valid}
    ></Input>
  );
};
export default Cell;
