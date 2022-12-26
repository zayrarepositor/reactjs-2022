import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import RectangularScreen from '../RectangularScreen/RectangularScreen';
import SquareButton from '../SquareButton/SquareButton';
import ClearButton from '../ClearButton/ClearButton';
import './Calculator.css';
const Calculator = () => {
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleResult = () => {
    if (input === '') return;
    let result = '';
    try {
      result = evaluate(input);
    } catch (error) {
      return alert(error.message);
    }
    setInput(result);
  };

  return (
    <div className='calculator-container'>
      <RectangularScreen input={input} />
      <div className='calculator-row'>
        <SquareButton handleClick={handleInput}>1</SquareButton>
        <SquareButton handleClick={handleInput}>2</SquareButton>
        <SquareButton handleClick={handleInput}>3</SquareButton>
        <SquareButton handleClick={handleInput}>+</SquareButton>
      </div>
      <div className='calculator-row'>
        <SquareButton handleClick={handleInput}>4</SquareButton>
        <SquareButton handleClick={handleInput}>5</SquareButton>
        <SquareButton handleClick={handleInput}>6</SquareButton>
        <SquareButton handleClick={handleInput}>-</SquareButton>
      </div>
      <div className='calculator-row'>
        <SquareButton handleClick={handleInput}>7</SquareButton>
        <SquareButton handleClick={handleInput}>8</SquareButton>
        <SquareButton handleClick={handleInput}>9</SquareButton>
        <SquareButton handleClick={handleInput}>*</SquareButton>
      </div>
      <div className='calculator-row'>
        <SquareButton handleClick={handleResult}>=</SquareButton>
        <SquareButton handleClick={handleInput}>0</SquareButton>
        <SquareButton handleClick={handleInput}>.</SquareButton>
        <SquareButton handleClick={handleInput}>/</SquareButton>
      </div>
      <div className='calculator-row'>
        <ClearButton handleClick={() => setInput('')}>Clear</ClearButton>
      </div>
    </div>
  );
};

export default Calculator;
