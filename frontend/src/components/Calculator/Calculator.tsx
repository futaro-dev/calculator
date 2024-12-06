import React, { useState } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import { evaluate } from "mathjs";

import "./Calculator.css";

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("");

  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const operators = ["+", "-", "*", "/"];

  const handleNumber = (value: string) => {
    setDisplayValue(displayValue + value);
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  const handleOperator = (value: string) => {
    setDisplayValue(displayValue + ` ${value} `);
  };

  const handleCalculate = () => {
    if (displayValue !== "") {
      setDisplayValue(evaluate(String(displayValue)));
    } else {
      setDisplayValue("0");
    }
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
              key={number}
              value={number}
              onClick={() => {
                handleNumber(number);
              }}
            />
          ))}
        </div>
        <div className="calculatorArithmeticOperators">
          {operators.map((operator) => (
            <Button
              key={operator}
              value={operator}
              onClick={() => {
                handleOperator(operator);
              }}
            />
          ))}
        </div>
        <div className="calculatorOtherOperators">
          <Button key={"C"} value={"C"} onClick={handleClear} />
          <Button key={"="} value={"="} onClick={handleCalculate} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
