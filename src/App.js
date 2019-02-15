import React, { Component } from 'react';
import SearchPanel from './components/SearchPanel';
import PersonsList from './components/personsList';
import Buttons from './components/buttons';
import SortPeronsList from './components/sortPersonsList';
import { PersonProvider } from './context';
import './main.scss';

class App extends Component {
  state = {
    value: { curVal: false },
  };
  render() {
    return (
      <PersonProvider
        value={this.state.value}
        onChange={item => this.setState({ value: { curVal: item } })}>
        <div className="container">
          <div className="list">
            <SortPeronsList />
            <SearchPanel />
            <PersonsList />
          </div>
          <Buttons />
        </div>
      </PersonProvider>
    );
  }
}

export default App;
