import React from "react";
import Operators from "../Operators/Operators";
import Numbers from "../Numbers/Numbers";
import Actions from "../Actions/Actions";

import { ButtonProps } from "../../types/types";

import "./Buttons.css";

const Buttons: React.FC<ButtonProps> = ({
  displayValue,
  calculated,
  setDisplayValue,
  setCalculated,
}) => {
  return (
    <div className="buttons">
      <Numbers
        displayValue={displayValue}
        calculated={calculated}
        setDisplayValue={setDisplayValue}
        setCalculated={setCalculated}
      />
      <Operators
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        setCalculated={setCalculated}
      />
      <Actions
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        setCalculated={setCalculated}
      />
    </div>
  );
};

export default Buttons;
