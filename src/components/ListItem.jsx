import React, { useState, useEffect } from 'react';

const ListItem = ({ item }) => {
  const [isCompleted, setIsCompleted] = useState(item.isCompleted);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const updatedTasks = tasks.map((task) =>
      task.id === item.id ? { ...task, isCompleted } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }, [isCompleted]);

  const handleChange = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <li className="list-item d-flex justify-content-between mb-3">
      <p
        className={`task-text py-1 ${
          isCompleted ? 'completed-task' : 'list-item'
        }`}
      >
        {item.text}
      </p>
      <input
        type="checkbox"
        className="checkbox-input"
        checked={isCompleted}
        onChange={handleChange}
      />
    </li>
  );
};

export default ListItem;
