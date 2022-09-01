import { useState, useEffect } from "react";

import "./Modal.css";

function Modal({ children, visib, onHandleClick }) {
  const [isActive, setActive] = useState("");

  useEffect(() => {
    setActive("active");
  }, []);

  return (
    <div className={`Modal ${isActive}`} onClick={onHandleClick}>
      <div className={`modal__content`}>{children}</div>
    </div>
  );
}

export default Modal;
