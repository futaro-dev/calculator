import React from "react";

import "./Button.css";

interface ButtonProps {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <div>
      <button className="calculatorButton" onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Button;
