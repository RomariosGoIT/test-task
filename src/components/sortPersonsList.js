import React from 'react';
import { PersonConsumer } from '../context';

const sortPersonsList = list => {
  return (
    <PersonConsumer>
      {value => {
        return (
          <div className="custom-select">
            <span>Сортировать по: </span>
            <select onChange={value.sortPersonsListHandler}>
              <option value="pageviews" defaultChecked>
                просмотрам
              </option>
              <option value="name">имени</option>
              <option value="count_pub">публикации</option>
            </select>
          </div>
        );
      }}
    </PersonConsumer>
  );
};

export default sortPersonsList;
