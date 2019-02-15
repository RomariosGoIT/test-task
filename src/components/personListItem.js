import React from 'react';
import ListElement from './listElement';
import { getColor, getUniqueId } from './helpers';

const PersonListItem = ({ personsList }) => {
  return personsList.map(item => {
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
};

export default PersonListItem;
