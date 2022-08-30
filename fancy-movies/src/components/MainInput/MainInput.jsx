import { useState, useEffect, useRef } from "react";
import "./index.css";

const MainInput = ({
  inputValue,
  setInputValue,
  onHandleSubmit,
  active,
  setActive,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); //al riavvio, focus sull'input, pronto a scrivere senza selezionarlo
  }, []);

  const onHandleInput = (e) => setInputValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (active === "active") {
      onHandleSubmit(e);
    }
    setActive("active");
  };

  return (
    <form className={`MainInput ${active}`} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={onHandleInput}
        type="text"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MainInput;
