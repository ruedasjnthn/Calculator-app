// dependency imports
import React from "react";

// function imports
import { ACTIONS } from "../App";

// component imports
import Button from "./Button";

function ButtonContainer({ dispatch}) {
  const handleAddDigit = (event) => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: event.target.value } });
  };

  const handleChooseOperation = (event) => {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: event.target.value } });
  };

  const handleClear = () => {
    dispatch({ type: ACTIONS.CLEAR });
  };

  const handleDeleteDigit = () => {
    dispatch({ type: ACTIONS.DELETE_DIGIT });
  };

  const handleEvaluate = (event) => {
    dispatch({ type: ACTIONS.EVALUATE, payload: { evaluate: event.target.value } });
  };

  return (
    <>
      <section className="calculatorKeys">
        <div className="calculatorKeys__container">
          <Button
            children="7"
            onClick={handleAddDigit}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="7"
          />
          <Button
            children="8"
            onClick={handleAddDigit}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="8"
          />
          <Button
            children="9"
            onClick={handleAddDigit}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="9"
          />
          <Button
            children="DEL"
            onClick={handleDeleteDigit}
            buttonStyle="btn--secondary"
            buttonSize="btn--small"
            value="del"
          /> 
          <Button
            children="4"
            onClick={handleAddDigit}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="4"
          />
          <Button
            children="5"
            onClick={handleAddDigit}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="5"
          />
          <Button
            children="6"
            onClick={handleAddDigit}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="6"
          />
          <Button
            children="+"
            onClick={handleChooseOperation}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="+"
          />
          <Button
            children="1"
            onClick={handleAddDigit}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="1"
          />
          <Button
            children="2"
            onClick={handleAddDigit}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="2"
          />
          <Button
            children="3"
            onClick={handleAddDigit}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="3"
          />
          <Button
            children="-"
            onClick={handleChooseOperation}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="-"
          />
          <Button
            children="."
            onClick={handleAddDigit}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="."
          />
          <Button
            children="0"
            onClick={handleAddDigit}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="0"
          />
          <Button
            children="/"
            onClick={handleChooseOperation}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="/"
          />
          <Button
            children="x"
            onClick={handleChooseOperation}
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            value="x"
          />
          <Button
            children="RESET"
            onClick={handleClear}
            buttonStyle="btn--secondary"
            buttonSize="btn--long"
            value="reset"
          />
          <Button
            children="="
            onClick={handleEvaluate}
            buttonStyle="btn--accent"
            buttonSize="btn--long"
            value="="
          />
        </div>
      </section>
    </>
  );
}

export default ButtonContainer;
