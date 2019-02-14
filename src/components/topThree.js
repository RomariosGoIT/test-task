import React from 'react';
import gold from '../1st.svg';
import bronze from '../2nd.svg';
import silver from '../3rd.svg';
import ListElement from './listElement';

const TopThree = ({ topThree, allData }) => {
  let show = '';
  let keyId = 0;
  const elements = allData.map(item => {
    keyId =
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9);
    const { id, name, count_pub, pageviews } = item;
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
        key={keyId}
        number={id}
        name={name}
        leter={leter}
        count_pub={count_pub}
        pageviews={pageviews}
        show={show}
      />
    );
  });

  return elements;
};

export default TopThree;
