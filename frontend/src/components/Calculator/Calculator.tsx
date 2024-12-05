import React, { useState } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";

import "./Calculator.css";

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("");

  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  const handleNumberClick = (value: string) => {
    setDisplayValue(displayValue + value);
  };

  const handleClearClick = () => {
    setDisplayValue("");
  };

  return (
    <div className="calculator">
      <div className="calculatorDisplay">
        <Display value={displayValue} />
      </div>
      <div className="calculatorButtons">
        <div className="calculatorNumbers">
          {numbers.map((number) => (
            <Button
              value={number}
              onClick={() => {
                handleNumberClick(number);
              }}
            />
          ))}
        </div>
        <div className="calculatorOperators">
          <button className="clearButton" onClick={handleClearClick}>
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
