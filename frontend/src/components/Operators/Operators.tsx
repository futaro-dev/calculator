import React from "react";
import Button from "../Button/Button";

import useMapping from "../../hooks/useMapping";

import "./Operators.css";

interface OperatorsProps {
  setCalculated: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Operators: React.FC<OperatorsProps> = ({
  setCalculated,
  setDisplayValue,
}) => {
  const operators = ["*", "/", "+", "-"];

  const { operatorToSymbol } = useMapping();

  // handleOperator handles input when an operator button is pressed.
  // - Resets the "calculated" state to false, indicating a new operation is being entered.
  // - Appends the operator (with spaces for clarity) to the current display value.
  const handleOperator = (value: string) => {
    setCalculated(false);

    setDisplayValue((displayValue) => `${displayValue} ${value} `);
  };

  return (
    <div className="operators">
      {operators.map((operator) => (
        <Button
          key={operator}
          value={operatorToSymbol[operator]}
          onClick={() => {
            handleOperator(operatorToSymbol[operator]);
          }}
        />
      ))}
    </div>
  );
};
