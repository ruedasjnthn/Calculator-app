// dependency imports
import React from "react";

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

const SCIENTIFIC_NOTATION_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0, notation: 'scientific'
});

function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (parseFloat(operand) >= 1000000000000000) {
    if (decimal == null) return SCIENTIFIC_NOTATION_FORMATTER.format(integer);
    return `${SCIENTIFIC_NOTATION_FORMATTER.format(integer)}.${decimal}`;
  }
  if (parseFloat(operand) < 1000000000000000) {
    if (decimal == null) return INTEGER_FORMATTER.format(integer);
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
  }
}

function ScreenDisplay({ currentOperand, previousOperand, operation }) {
  return (
    <>
      <div className="display">
        <div className="display__container">
          <div className="display__previousOperand">
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className="display__currentOperand">
            {formatOperand(currentOperand)}
          </div>
        </div>
      </div>
    </>
  );
}

export default ScreenDisplay;
