import React from "react";
import Button from "../Button/Button";

import { ButtonProps } from "../../types/types";
import "./Numbers.css";

const Numbers: React.FC<ButtonProps> = ({
  displayValue,
  calculated,
  setDisplayValue,
  setCalculated,
}) => {
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "e"];

  // handleNumber handles input when a number button is pressed.
  // - If a calculation has just been completed (calculated is true), it resets the state
  //   by setting "calculated" to false and replacing the display value with the new input.
  // - Otherwise, it appends the pressed number to the current display value.
  const handleNumber = (value: string) => {
    if (calculated) {
      setCalculated(false);
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="numbers">
      {numbers.map((number) => (
        <Button
          key={number}
          value={number}
          onClick={() => {
            handleNumber(number);
          }}
        />
      ))}
    </div>
  );
};

export default Numbers;
