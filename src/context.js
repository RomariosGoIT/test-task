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
  };

  componentDidMount() {
    this.getTopThree(this.state.data);
  }

  componentWillMount() {
    this.getTopThree(this.state.data);
  }

  setSearchValue = str => {
    this.setState({ term: str.toLowerCase() });
  };

  searchHandler = (data, value) => {
    if (value === '') return data;
    return data.filter(item => item.name.toLowerCase().indexOf(value) > -1);
  };

  getTopThree = data => {
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
    return this.setState({ pages });
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
        }}>
        {this.props.children}
      </PersonContext.Provider>
    );
  }
}

const PersonConsumer = PersonContext.Consumer;

export { PersonProvider, PersonConsumer };
