// dependency imports
import React from "react";

const RadioButton = ({ id, label, onChange, value, checked, className }) => {
  return (
    <div className="radio--btn">
      <label htmlFor={label}>
        <input
          id={id}
          onChange={onChange}
          value={value}
          type="radio"
          checked={checked}
          className={className}
        />
        <div className="customRadio"/>
      </label>
    </div>
  );
};

export default RadioButton;
