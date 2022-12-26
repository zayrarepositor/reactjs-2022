import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import Task from '../Task.js/Task';
import './Board.css';

const Board = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const updatedTasks = [task, ...tasks];
    setTasks(updatedTasks);
  };

  const editTask = (id) => {
    const tasksEdited = tasks.map((task) => {
      if (task.id === id) task.done = !task.done;
      return task;
    });
    setTasks(tasksEdited);
  };

  const deleteTask = (id) => {
    const tasksUpdated = tasks.filter((task) => task.id !== id);
    setTasks(tasksUpdated);
  };

  return (
    <div className='board'>
      <InputField addTask={addTask} />
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Board;
