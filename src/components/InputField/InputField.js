import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './InputField.css';

const InputField = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    let { value } = e.target;
    let sanitizedValue = value.trim();
    setInput(sanitizedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === '') return;

    const newTask = {
      id: uuidv4(),
      text: input,
      done: false
    };

    props.addTask(newTask);
  };

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <input
        className='input-field'
        type='text'
        placeholder='Write a task'
        name='text'
        onChange={handleChange}
      />
      <button className='form-button'>Add</button>
    </form>
  );
};

export default InputField;
