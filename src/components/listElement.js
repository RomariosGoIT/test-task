import React from 'react';

const listElement = ({
  id,
  leter,
  name,
  count_pub,
  pageviews,
  number = 1,
  show = '',
}) => {
  return (
    <li key={id} className="list-group-item list__item">
      <span>{number}</span>
      <span className="list__later">{leter}</span>
      <span>
        <p>{name}</p>
        <p>{count_pub} публ</p>
      </span>
      <span>{show}</span>
      <p>{pageviews}</p>
    </li>
  );
};

export default listElement;
