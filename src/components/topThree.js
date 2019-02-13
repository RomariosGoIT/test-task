import React from 'react';
import gold from '../1st.svg';
import bronze from '../2nd.svg';
import silver from '../3rd.svg';

const TopThree = ({ topThree, allData }) => {
  let id = 0;
  let number = 0;
  let show = '';

  const elements = allData.map(item => {
    const { name, count_pub, pageviews } = item;
    let leter = name.slice(0, 1);
    number++;
    id++;
    if (topThree[0] === pageviews) {
      show = <img className="list__icon" src={gold} alt="icon" />;
    }
    if (topThree[1] === pageviews) {
      show = <img className="list__icon" src={bronze} alt="icon" />;
    }

    if (topThree[2] === pageviews) {
      show = <img className="list__icon" src={silver} alt="icon" />;
    }

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
  });

  return elements;
};

export default TopThree;
