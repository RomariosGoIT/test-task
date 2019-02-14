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
    const test = data.reduce(
      (acc, arr, idx) => acc.concat({ id: idx + 1, ...arr }),
      [],
    );

    const top = data.reduce(
      (acc, item) =>
        acc
          .concat(item.pageviews)
          .sort((a, b) => b - a)
          .slice(0, 3),
      [],
    );

    const rest = test.filter(item => top.indexOf(item.pageviews) < 0);

    const topList = test
      .filter(item => top.indexOf(item.pageviews) >= 0)
      .sort((a, b) => b.pageviews - a.pageviews);

    this.getPages(rest, 1);

    return this.setState({ topThree: top, rest, topList });
  };

  getPages = (data, page) => {
    if (page < 1) return;
    let start = (page - 1) * 10;
    let end = page * 10;

    if (page === 1) {
      end = 7;
    }
    if (page >= 2) {
      start -= 3;
      end -= 3;
    }

    let pages = data.slice(start, end);
    return this.setState({ pages });
  };

  onNext = val => {
    let curPage = this.state.page + val;
    this.setState({ page: curPage });
    return this.getPages(this.state.rest, curPage);
  };

  onPrev = val => {
    let curPage = this.state.page - val;
    this.setState({ page: curPage });
    return this.getPages(this.state.rest, curPage);
  };

  render() {
    const { data, term, topThree, rest, pages, topList, page } = this.state;
    const updatedData = this.searchHandler(rest, term);
    let content = '';
    let cont = '';
    if (data && topThree && pages && topList) {
      cont = term === '' ? (cont = pages) : (cont = updatedData);
      content = (
        <div className="list">
          <SearchPanel setSearchValue={this.setSearchValue} />
          <TodoList
            todos={cont}
            topThree={topThree}
            allData={topList}
            page={page}
          />
        </div>
      );
    }

    return (
      <div className="container">
        {content}
        <Button
          prev={this.onPrev}
          next={this.onNext}
          currentPage={this.state.page}
          lasPage={rest}
        />
      </div>
    );
  }
}

export default App;
