import React, { useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoContext from '../context/TodoContext';

const AddTaskButton = () => {
  const [showBtn, setShowBtn] = useState(true);
  const [text, setText] = useState('');

  const { addTask } = useContext(TodoContext);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setShowBtn(true);
      setText('');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      toast.error('Please add a task !', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 700,
        transition: Slide,
      });
      return;
    }
    // Get existing tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add new task
    const newTaskItem = {
      id: nanoid(6),
      text: text,
      isCompleted: false,
    };
    tasks.push(newTaskItem);

    // Update local storage with new tasks
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Clear input field and hide input form
    setText('');
    setShowBtn(true);

    // Add new task item to task list
    addTask(newTaskItem);
    toast.success('Task Added !', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 700,
      transition: Slide,
    });
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const toggleAddBtn = () => {
    setShowBtn(!showBtn);
  };

  return (
    <div className="my-4">
      <form className="add-task-form" onSubmit={handleSubmit}>
        {!showBtn && (
          <>
            <input
              type="text"
              placeholder="Enter a task"
              value={text}
              className="task-input w-100 p-2"
              onChange={handleTextChange}
              autoFocus
            />
            <button type="submit" className="d-none"></button>
          </>
        )}
      </form>
      {showBtn && (
        <button className="add-button" onClick={toggleAddBtn}>
          +
        </button>
      )}
      <ToastContainer />
    </div>
  );
};

export default AddTaskButton;
