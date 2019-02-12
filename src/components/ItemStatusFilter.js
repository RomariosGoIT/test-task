import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  state = {
    filter: 'all',
    button: [
      { name: 'all', isActive: false, id: 1 },
      { name: 'active', isActive: false, id: 2 },
      { name: 'done', isActive: false, id: 3 },
    ],
  };

  setFilterValue = val => {
    this.props.setFilterValue(val);
    this.setState({ filter: val });
  };

  render() {
    return (
      <div className="btn-group">
        {this.state.button.map(({ isActive, name, id }) => {
          isActive = this.state.filter === name;
          let style = isActive ? ' active' : 'btn-outline-secondary';
          return (
            <button
              key={id}
              type="button"
              className={`btn ${style}`}
              onClick={() => this.setFilterValue(name)}>
              {name}
            </button>
          );
        })}
      </div>
    );
  }
}
