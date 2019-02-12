import React from 'react';

const TodoListItem = ({ todos }) => {
  let id = 0;
  const elements = todos.map(item => {
    const { name, count_pub, pageviews } = item;
    let leter = name.slice(0, 1);
    id++;
    return (
      <li key={id} className="list-group-item list__item">
        <span className="list__later">{leter}</span>
        <span>
          <p>{name}</p>
          <p>{count_pub} публ</p>
        </span>
        <p>{pageviews}</p>
      </li>
    );
  });

  return elements;
};

export default TodoListItem;
