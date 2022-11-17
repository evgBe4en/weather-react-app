import "../App.css";
import React, { useRef, useContext } from "react";
import { GlobalContext } from "../App";

const Input = () => {
  const inputRef = useRef(null);
  const {
    dispatch,
    state: { inputValue, editingCuty },
  } = useContext(GlobalContext);

  const handleOnChange = (event) => {
    dispatch({
      type: "CHANGE_INPUT_VALUE",
      payload: event.target.value,
    });
  };

  const handleOnClick = () => {
    dispatch({
      type: "ADD_CITY",
      payload: inputValue,
    });
    dispatch({
      type: "RESET_INPUT_VALUE",
    });
    inputRef.current.focus();
  };

  const handleOnDone = () => {
    dispatch({
      type: "EDIT_CITY_DONE",
      payload: inputValue,
    });
    dispatch({
      type: "RESET_INPUT_VALUE",
    });
    inputRef.current.focus();
  };

  return (
    <div className="inputWrap">
      <input
        className="input styleCard"
        type="text"
        placeholder="Kharkiv..."
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      ></input>

      {editingCuty ? (
        <button className="button styleCard" onClick={handleOnDone}>
          {" "}
          Ok{" "}
        </button>
      ) : (
        <button className="button styleCard" onClick={handleOnClick}>
          {" "}
          +{" "}
        </button>
      )}
    </div>
  );
};

export default Input;
