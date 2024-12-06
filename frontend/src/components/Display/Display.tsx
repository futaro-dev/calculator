import React, { useEffect, useRef } from "react";

import "./Display.css";

interface DisplayProps {
  displayValue: string;
}

const Display: React.FC<DisplayProps> = ({ displayValue }) => {
  const displayAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (displayAreaRef.current) {
      displayAreaRef.current.scrollTo({
        top: displayAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [displayValue]);

  return (
    <div ref={displayAreaRef} className="displayArea">
      <div className="displayText">{displayValue}</div>
    </div>
  );
};

export default Display;
