import React from 'react';
import './CounterScreen.css';
const CounterScreen = ({ text, clicks }) => {
  return (
    <>
      <p className='counter-text'>{text}</p>
      <div className='counter-screen'>{clicks}</div>
    </>
  );
};

export default CounterScreen;
