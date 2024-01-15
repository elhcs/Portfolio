import React from 'react';
import "./Modal.css";
const Modal = ({ isOpen, handleClose, message }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-box">
          <p>{message}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    )
  );
};

export default Modal;