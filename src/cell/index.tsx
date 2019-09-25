import React from "react";
import styled from "styled-components";
import { SudokuType } from "../utils/constants";
import { Sudoku } from "../utils/helpers";

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
  sudoku: SudokuType;
  rowNumber: number;
  columnNumber: number;
}

const Cell = ({ sudoku, rowNumber, columnNumber }: CellProps) => {
  const solver = new Sudoku(sudoku);

  const [valid, setValid] = React.useState(true);
  const [value, setValue] = React.useState(
    (sudoku[rowNumber][columnNumber] || "").toString(),
  );

  const isPreset = Boolean(sudoku[rowNumber][columnNumber]);
  const onCellInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const result = inputValue.match(/^[1-9]+$/g);
    if (result || inputValue === "") {
      const lastCharacter = inputValue ? inputValue[inputValue.length - 1] : "";
      setValue(lastCharacter);
      setValid(
        lastCharacter
          ? solver.isValid(Number(lastCharacter), rowNumber, columnNumber)
          : true,
      );
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
