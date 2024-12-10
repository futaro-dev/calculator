import React, { useState } from "react";

import { Display } from "../Display/Display";
import { Numbers } from "../Numbers/Numbers";
import { Operators } from "../Operators/Operators";
import { Actions } from "../Actions/Actions";

import "./Calculator.css";

export const Calculator: React.FC = () => {
  const [calculated, setCalculated] = useState<boolean>(false);
  const [displayValue, setDisplayValue] = useState<string>("");

  return (
    <div className="calculator">
      <Display displayValue={displayValue} />
      <div className="buttons">
        <Numbers
          calculated={calculated}
          setCalculated={setCalculated}
          setDisplayValue={setDisplayValue}
        />
        <Operators
          setCalculated={setCalculated}
          setDisplayValue={setDisplayValue}
        />
        <Actions
          displayValue={displayValue}
          setCalculated={setCalculated}
          setDisplayValue={setDisplayValue}
        />
      </div>
    </div>
  );
};
