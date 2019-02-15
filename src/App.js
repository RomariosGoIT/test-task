import React, { Component } from 'react';
import SearchPanel from './components/SearchPanel';
import PersonsList from './components/personsList';
import Buttons from './components/buttons';
import './main.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="list">
          <SearchPanel />
          <PersonsList />
        </div>
        <Buttons />
      </div>
    );
  }
}

export default App;
