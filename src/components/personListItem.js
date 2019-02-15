import React from 'react';
import ListElement from './listElement';
import { getColor, getUniqueId } from './helpers';

const PersonListItem = ({ personsList }) => {
  const elements = personsList.map(item => {
    const { id, name } = item;
    let leter = name.slice(0, 1);
    return (
      <ListElement
        key={getUniqueId()}
        color={getColor(id)}
        leter={leter}
        {...item}
      />
    );
  });

  return elements;
};

export default PersonListItem;
