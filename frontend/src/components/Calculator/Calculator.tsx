import React, { useState } from "react";
import Display from "../Display/Display";
import Buttons from "../Buttons/Buttons";

import "./Calculator.css";

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("");
  const [calculated, setCalculated] = useState<boolean>(false);

  return (
    <div className="calculator">
      <Display displayValue={displayValue} />
      <Buttons
        displayValue={displayValue}
        calculated={calculated}
        setDisplayValue={setDisplayValue}
        setCalculated={setCalculated}
      />
    </div>
  );
};

export default Calculator;
