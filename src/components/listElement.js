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
      <span className="list__number">{number}</span>
      <span className="list__later">{leter}</span>
      <span className="list__block">
        <p className="list__block">{name}</p>
        <span className="list__count_pub">{count_pub} публ</span>
      </span>
      <span className="list__place">{show}</span>
      <span className="list__pageviews">{pageviews}</span>
    </li>
  );
};

export default listElement;
