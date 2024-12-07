import React from "react";

interface ButtonProps {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};

export default Button;
