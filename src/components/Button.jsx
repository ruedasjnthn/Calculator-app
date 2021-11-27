import React from "react";

const STYLES = ["btn--primary", "btn--secondary", "btn--accent"];

const SIZES = ["btn--small", "btn--long", ];

const Button = ({ children, onClick, buttonStyle, buttonSize, value,}) => {
  const setButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const setButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button className={`btn ${setButtonStyle} ${setButtonSize}`} onClick={onClick} value={value}>
      {children}
    </button>
  );
};

export default Button;