import React from 'react';
import TodoListItem from './TodoListItem';
import TopThree from './topThree';

const TodoList = ({ todos, topThree, allData }) => {
  return (
    <ul className="list-group todo-list">
      <TopThree topThree={topThree} allData={allData} />
      <TodoListItem todos={todos} />
    </ul>
  );
};

export default TodoList;
