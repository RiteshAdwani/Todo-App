import React, { createContext, useState, useEffect } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const [todoList, setTodoList] = useState(tasks);

  useEffect(() => {
    const now = new Date();
    const timeTillMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) -
      now;
    const timeoutId = setTimeout(() => {
      localStorage.removeItem('tasks');
      setTodoList([]);
    }, timeTillMidnight);
    return () => clearTimeout(timeoutId);
  }, [todoList]);

  const addTask = (newTask) => {
    setTodoList([...todoList, newTask]);
  };

  return (
    <TodoContext.Provider value={{ todoList, addTask }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
