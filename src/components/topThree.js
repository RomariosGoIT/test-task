import React from 'react';
import gold from '../image/1st.svg';
import bronze from '../image/2nd.svg';
import silver from '../image/3rd.svg';
import ListElement from './listElement';
import { getColor, getUniqueId } from './helpers';

const TopThree = ({ topThree, allData }) => {
  let show = '';
  const elements = allData.map(item => {
    const { id, name, pageviews } = item;
    let leter = name.slice(0, 1);
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
      <ListElement
        key={getUniqueId()}
        color={getColor(id)}
        leter={leter}
        show={show}
        {...item}
      />
    );
  });

  return elements;
};

export default TopThree;
