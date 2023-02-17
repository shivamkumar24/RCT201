import React from "react";
import "./Button.css";

const Button = ({ children, colorScheme }) => {
  return (
    <button data-testid="customBtn" className={`${colorScheme || "red"}`}>
      {children}
    </button>
  );
};

export default Button;
