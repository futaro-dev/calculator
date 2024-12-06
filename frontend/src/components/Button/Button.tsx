import React from "react";

interface ButtonProps {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

export default Button;
