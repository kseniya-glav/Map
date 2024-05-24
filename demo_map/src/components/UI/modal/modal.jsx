import React from "react";
import "./modal.css";

const Modal = ({ active, setActive, width, children }) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        style={{ width: width }}
      >
        <label className="close" onClick={() => setActive(false)}>
          &times;
        </label>
        {children}
      </div>
    </div>
  );
};

export default Modal;
