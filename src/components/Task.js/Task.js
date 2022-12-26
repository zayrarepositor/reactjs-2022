import React from 'react';
import { CgCloseO } from 'react-icons/cg';
import './Task.css';

const Task = ({ id, text, done, editTask, deleteTask }) => {
  return (
    <div className={`task-container ${done ? 'done' : ''}`.trimEnd()}>
      <div className='task-text' onClick={() => editTask(id)}>
        {text}
      </div>
      <div className='task-container-icon' onClick={() => deleteTask(id)}>
        <CgCloseO className='task-icon' />
      </div>
    </div>
  );
};

export default Task;
