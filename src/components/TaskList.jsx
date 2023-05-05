import React, { useContext } from 'react';
import ListItem from './ListItem';
import NoDataImg from '../images/no-data-found.png';
import TodoContext from '../context/TodoContext';

const TaskList = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <div className="task-list my-3">
      {todoList.length !== 0 ? (
        <ul className="ps-0">
          {todoList.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <div className="text-center">
          <img
            src={NoDataImg}
            alt="No tasks added"
            height="350px"
            width="280px"
            className="no-data-img pb-4"
          />
          <h6>No tasks at the moment!</h6>
        </div>
      )}
    </div>
  );
};

export default TaskList;
