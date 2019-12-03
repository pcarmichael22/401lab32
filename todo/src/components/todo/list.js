import React, { useState, useReducer, useEffect } from 'react';

function List() {
  const [toggleComplete, setToggleComplete] = useEffect();
  const [toggleDetails, setToggleDetails] = useEffect();
  const [deleteItem, setDeleteItem] = useEffect();
  const [todoList, setTodoList] = useState([
    { _id: 1, text: 'Test1', complete: true },
    { _id: 2, text: 'Test2', complete: false }
  ]);

  return (
    <div>
      <ul>
        {todoList.map(item => (
          <li className={`complete-${item.complete.toString()}`} key={item._id}>
            <span onClick={() => toggleComplete(item._id)}>{item.text}</span>
            <button onClick={() => toggleDetails(item._id)}>Details</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
