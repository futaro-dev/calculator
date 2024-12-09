import React from "react";
import Button from "../Button/Button";

import { evaluate, format } from "mathjs";

import useMapping from "../../hooks/useMapping";

import "./Actions.css";

interface ActionsProps {
  displayValue: string;
  setCalculated: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Actions: React.FC<ActionsProps> = ({
  displayValue,
  setCalculated,
  setDisplayValue,
}) => {
  const { symbolToOperator } = useMapping();

  // handleClear resets the calculator state by setting "calculated" to false
  // (indicating that the next input will be a new calculation) and clears the
  // display value by setting it to an empty string.
  const handleClear = () => {
    setCalculated(false);

    setDisplayValue("");
  };

  // handleCalculate evaluates the current mathematical expression displayed on the calculator.
  // - Sets "calculated" to true, indicating the result is now displayed.
  // - Converts any symbolic operators (e.g., "×", "÷") into standard operators for evaluation.
  // - Evaluates the expression using the "evaluate" function and formats the result to 14 decimal places.
  // - If the display is empty, sets it to "0".
  // - If an error occurs during evaluation (e.g., invalid input), displays "ERROR".
  const handleCalculate = () => {
    setCalculated(true);

    try {
      if (displayValue !== "") {
        const displayValueFormatted = String(displayValue)
          .split("")
          .map((char) => symbolToOperator[char] || char)
          .join("");

        const calculation = evaluate(displayValueFormatted);
        setDisplayValue(format(calculation, { precision: 14 }));
      } else {
        setDisplayValue("0");
      }
    } catch (error) {
      setDisplayValue("ERROR");
    }
  };

  return (
    <div className="actions">
      <Button key={"C"} value={"C"} onClick={handleClear} />
      <Button key={"="} value={"="} onClick={handleCalculate} />
    </div>
  );
};
