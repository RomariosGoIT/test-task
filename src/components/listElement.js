import React from 'react';

const listElement = ({
  leter,
  name,
  count_pub,
  pageviews,
  id = 1,
  show = '',
  color,
}) => {
  return (
    <li className="list-group-item list__item">
      <span className="list__number">{id}</span>
      <span className="list__later" style={{ backgroundColor: color }}>
        {leter}
      </span>
      <span className="list__block">
        <p className="list__block-name">{name}</p>
        <span className="list__count_pub">{count_pub} публ</span>
      </span>
      <span className="list__place">{show}</span>
      <span className="list__pageviews">{pageviews}</span>
    </li>
  );
};

export default listElement;
