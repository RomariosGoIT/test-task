import React, { Component } from 'react';
import SearchPanel from './components/SearchPanel';
import data from './data.json';
import TodoList from './components/TodoList';
import './main.scss';

class App extends Component {
  state = {
    data: data,
    term: '',
    topThree: [],
  };

  setSearchValue = str => {
    this.setState({ term: str.toLowerCase() });
  };

  searchHandler = (data, val) => {
    if (val === '') return data;
    return data.filter(item => item.name.toLowerCase().indexOf(val) > -1);
  };

  getTopThree = data =>
    data.reduce(
      (acc, item) =>
        acc
          .concat(item.pageviews)
          .sort((a, b) => b - a)
          .slice(0, 3),
      [],
    );

  render() {
    const { data, term } = this.state;

    const getTopThree = this.getTopThree(data);
    const rest = data.filter(item => getTopThree.indexOf(item.pageviews) < 0);
    const updatedData = this.searchHandler(rest, term);
    return (
      <div className="container">
        <div className="list">
          <SearchPanel setSearchValue={this.setSearchValue} />
          <TodoList todos={updatedData} topThree={getTopThree} allData={data} />
        </div>
      </div>
    );
  }
}

export default App;
