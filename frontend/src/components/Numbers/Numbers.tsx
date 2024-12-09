import React from "react";
import Button from "../Button/Button";

import "./Numbers.css";

const NUMBERS = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "e"];

interface NumbersProps {
  calculated: boolean;
  setCalculated: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Numbers: React.FC<NumbersProps> = ({
  calculated,
  setDisplayValue,
  setCalculated,
}) => {
  // handleNumber handles input when a number button is pressed.
  // - If a calculation has just been completed (calculated is true), it resets the state
  //   by setting "calculated" to false and replacing the display value with the new input.
  // - Otherwise, it appends the pressed number to the current display value.
  const handleNumber = (value: string) => {
    if (calculated) {
      setCalculated(false);
      setDisplayValue(value);
    } else {
      setDisplayValue((displayValue) => displayValue + value);
    }
  };

  return (
    <div className="numbers">
      {NUMBERS.map((num) => (
        <Button
          key={num}
          value={num}
          onClick={() => {
            handleNumber(num);
          }}
        />
      ))}
    </div>
  );
};
