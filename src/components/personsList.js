import React from 'react';
import PersonListItem from './personListItem';
import TopThree from './topThree';
import { PersonConsumer } from '../context';

const TodoList = () => {
  let personsList = '';
  return (
    <PersonConsumer>
      {value => {
        value.term === ''
          ? (personsList = value.pages)
          : (personsList = value.searchHandler(
              value.restPersonList,
              value.term,
            ));
        return (
          <ul className="list-group persons-list">
            {value.page === 1 ? (
              <TopThree
                topThree={value.topThreePageviews}
                allData={value.topThreePerson}
              />
            ) : null}
            <PersonListItem personsList={personsList} />
          </ul>
        );
      }}
    </PersonConsumer>
  );
};

export default TodoList;
