import React from 'react';
import '../../styles/Button.css';

const Button = ({ action, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {action}
    </button>
  );
};

export default Button;