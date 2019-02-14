import React from 'react';
import ListElement from './listElement';

const TodoListItem = ({ todos }) => {
  let keyId = 0;
  const elements = todos.map((item, idx) => {
    keyId =
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9);
    const { id, name, count_pub, pageviews } = item;
    let leter = name.slice(0, 1);
    return (
      <ListElement
        key={keyId}
        number={id}
        name={name}
        leter={leter}
        count_pub={count_pub}
        pageviews={pageviews}
      />
    );
  });

  return elements;
};

export default TodoListItem;
