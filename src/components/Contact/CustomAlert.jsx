import React, { useState } from 'react';
import correo from '../assets/img/icon-correo.gif'
import './CustomAlert.css'

const CustomAlert = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className={`custom-alert ${isVisible ? 'visible' : 'hidden'}`}>
        <img src={correo} alt="" />
      <p>{message}</p>
      <button onClick={handleClose}>Cerrar</button>
    </div>
  );
};

export default CustomAlert;
