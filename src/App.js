import React, { Component } from 'react';
import SearchPanel from './components/SearchPanel';
import PersonsList from './components/personsList';
import Buttons from './components/buttons';
import SortPeronsList from './components/sortPersonsList';
import './main.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="list">
          <SortPeronsList />
          <SearchPanel />
          <PersonsList />
        </div>
        <Buttons />
      </div>
    );
  }
}

export default App;
