import React, { Component } from 'react';
import SearchPanel from './components/SearchPanel';
import data from './data.json';
import TodoList from './components/TodoList';
import Button from './components/buttons';
import './main.scss';

class App extends Component {
  state = {
    data: data,
    term: '',
    topThree: null,
    rest: null,
    show: null,
    pages: null,
    topList: null,
    page: 1,
  };

  componentDidMount() {
    this.getTopThree(this.state.data);
  }

  setSearchValue = str => {
    this.setState({ term: str.toLowerCase() });
  };

  searchHandler = (data, val) => {
    if (val === '') return data;
    return data.filter(item => item.name.toLowerCase().indexOf(val) > -1);
  };

  getTopThree = data => {
    const top = data.reduce(
      (acc, item) =>
        acc
          .concat(item.pageviews)
          .sort((a, b) => b - a)
          .slice(0, 3),
      [],
    );

    const rest = data.filter(item => top.indexOf(item.pageviews) < 0);

    const topList = data
      .filter(item => top.indexOf(item.pageviews) >= 0)
      .sort((a, b) => b.pageviews - a.pageviews);

    const arr = [...topList, ...rest];

    this.getPages(rest);

    return this.setState({ topThree: top, rest, topList });
  };

  getPages = data => {
    let start = 0;
    let end = 10;
    if (this.state.page === 1) {
      end = 7;
    }
    let pages = data.slice(start, end);
    return this.setState({ pages });
  };

  onNext = val => {
    this.setState({ page: this.state.page + val });
    return this.getPages(this.state.rest);
  };

  onPrev = val => {
    this.setState({ page: this.state.page - val });
    return this.getPages(this.state.rest);
  };

  render() {
    const { data, term, topThree, rest, pages, topList } = this.state;
    const updatedData = this.searchHandler(rest, term);
    let content = '';
    if (data && topThree && pages && topList) {
      let cont = term === '' ? (cont = pages) : (cont = updatedData);
      content = (
        <div className="list">
          <SearchPanel setSearchValue={this.setSearchValue} />
          <TodoList todos={cont} topThree={topThree} allData={topList} />
        </div>
      );
    }

    return (
      <div className="container">
        {content}
        <Button prev={this.onPrev} next={this.onNext} />
      </div>
    );
  }
}

export default App;
