import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import './App.css';


function ToDoList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  const link = 'https://653d239df52310ee6a99eb42.mockapi.io/api/toDo/toDos';


  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setNewTask('');
    }
  };

  const fetchTasks = () => {
    return fetch(link)
      .then((res) => res.json())
      .then((d) => {
        d.forEach(task => {
          dispatch({ type: 'ADD_TASK', payload: task.text });
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  useEffect(() => {
    fetchTasks();
  }, [dispatch]);


  const handleDeleteTask = (index) => {
    dispatch({ type: 'DELETE_TASK', payload: index });
  };

  const handleCheckboxChange = (index) => {
    dispatch({ type: 'TOGGLE_TASK', payload: index });
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="input-container">
        <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a new task" />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'checked' : ''}>
            <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(index)} />
            {task.text}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
