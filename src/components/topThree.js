import React from 'react';

const TopThree = ({ topThree, allData }) => {
  const top = allData
    .filter(item => topThree.indexOf(item.pageviews) >= 0)
    .sort((a, b) => b.pageviews - a.pageviews);

  let id = 0;
  let show = '';
  const elements = top.map(item => {
    const { name, count_pub, pageviews } = item;
    let leter = name.slice(0, 1);
    id++;
    if (topThree[0] === pageviews) {
      show = 'Gold';
    }
    if (topThree[1] === pageviews) {
      show = 'Bronse';
    }

    if (topThree[2] === pageviews) {
      show = 'Silver';
    }
    return (
      <li key={id} className="list-group-item list__item">
        <span className="list__later">{leter}</span>
        <span>
          <p>{name}</p>
          <p>{count_pub} публ</p>
        </span>
        <span>{show}</span>
        <p>{pageviews}</p>
      </li>
    );
  });

  return elements;
};

export default TopThree;
