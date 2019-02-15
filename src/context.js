import React, { Component } from 'react';
import data from './data.json';

const PersonContext = React.createContext();

class PersonProvider extends Component {
  state = {
    data: data,
    term: '',
    topThreePageviews: [],
    restPersonList: [],
    show: null,
    pages: null,
    topThreePerson: [],
    page: 1,
    label: '',
    sortBy: '',
    pageCount: { start: 0, end: 0 },
  };

  componentWillMount() {
    try {
      this.dataHandler(this.state.data);
    } catch (err) {
      console.log(err);
    }
  }

  setSearchValue = str => {
    this.setState({ term: str.toLowerCase() });
  };

  searchHandler = (data, value) => {
    if (value === '') return data;
    return data.filter(item => item.name.toLowerCase().indexOf(value) > -1);
  };

  dataHandler = data => {
    const updatedData = data.reduce(
      (acc, arr, idx) => acc.concat({ id: idx + 1, ...arr }),
      [],
    );

    const topThreePageviews = data.reduce(
      (acc, item) =>
        acc
          .concat(item.pageviews)
          .sort((a, b) => b - a)
          .slice(0, 3),
      [],
    );

    const restPersonList = updatedData.filter(
      item => topThreePageviews.indexOf(item.pageviews) < 0,
    );

    const topThreePerson = updatedData
      .filter(item => topThreePageviews.indexOf(item.pageviews) >= 0)
      .sort((a, b) => b.pageviews - a.pageviews);

    this.getPages(restPersonList, 1);

    return this.setState({ topThreePageviews, restPersonList, topThreePerson });
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
    return this.setState({ pages, pageCount: { start, end } });
  };

  onNextPage = val => {
    let curPage = this.state.page + val;
    this.setState({ page: curPage });
    return this.getPages(this.state.restPersonList, curPage);
  };

  onPrevPage = val => {
    let curPage = this.state.page - val;
    this.setState({ page: curPage });
    return this.getPages(this.state.restPersonList, curPage);
  };

  handleLabelValue = ({ target }) => {
    let value = target.value;
    this.setSearchValue(value);
    this.setState({ label: value });
  };

  sortPersonsListHandler = ({ target }) => {
    const sortData = [...this.state.restPersonList].sort((a, b) => {
      if (target.value === 'name') {
        let x = a[target.value].toLowerCase();
        let y = b[target.value].toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      }
      return b[target.value] - a[target.value];
    });
    const update = sortData.map((item, idx = 4) => {
      return {
        id: idx + 4,
        name: item.name,
        count_pub: item.count_pub,
        pageviews: item.pageviews,
      };
    });
    this.getPages(update, 1);
    return this.setState({ restPersonList: update });
  };

  render() {
    return (
      <PersonContext.Provider
        value={{
          ...this.state,
          onPrevPage: this.onPrevPage,
          onNextPage: this.onNextPage,
          getPages: this.getPages,
          setSearchValue: this.setSearchValue,
          handleLabelValue: this.handleLabelValue,
          searchHandler: this.searchHandler,
          sortPersonsListHandler: this.sortPersonsListHandler,
        }}>
        {this.props.children}
      </PersonContext.Provider>
    );
  }
}

const PersonConsumer = PersonContext.Consumer;

export { PersonProvider, PersonConsumer };
