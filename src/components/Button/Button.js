import React from 'react';
import './Button.css';

const Button = ({ text, click, handleClick }) => {
  return (
    <div>
      <button
        className={click ? 'add-button' : 'refresh-button'}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
