import React  from 'react';
import img from '../image/search.png';
import { PersonConsumer } from '../context';

const  SearchPanel = () => {
    return (
      <PersonConsumer>
        {value => {
          return (
            <form className="search__form">
              <img src={img} alt="search" className="search__img" />
              <input
                type="text"
                className="search__input"
                placeholder="Поиск авторов по имени"
                onChange={value.handleLabelValue}
                value={value.label}
              />
            </form>
          );
        }}
      </PersonConsumer>
    );
}

export default SearchPanel;
