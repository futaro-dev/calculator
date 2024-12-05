import React from "react";

import "./Display.css";

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="displayArea">
      <div className="displayText">{value}</div>
    </div>
  );
};

export default Display;
