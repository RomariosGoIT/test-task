import React, { Component } from 'react';

class SearchPanel extends Component {
  state = {
    label: '',
  };

  handleLabelValue = ({ target }) => {
    let value = target.value;
    this.props.setSearchValue(value);
    this.setState({ label: value });
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.handleLabelValue}
        value={this.state.label}
      />
    );
  }
}

export default SearchPanel;
