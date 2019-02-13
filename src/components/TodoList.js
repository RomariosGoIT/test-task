import React from 'react';
import TodoListItem from './TodoListItem';
import TopThree from './topThree';

const TodoList = ({ todos, topThree, allData, page = 1 }) => {
  let top =
    page === 1
      ? (top = <TopThree topThree={topThree} allData={allData} />)
      : null;
  return (
    <ul className="list-group todo-list">
      {top}
      <TodoListItem todos={todos} />
    </ul>
  );
};

export default TodoList;
