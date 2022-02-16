import React, { Component } from 'react';

export default class SelectedFood extends Component {
  remove = (key) => {
    this.props.remove(key);
  };

  render() {
    return Object.keys(this.props.selectedFood).map((key, i) => {
      return (
        <div className="item" key={i}>
          {this.props.selectedFood[key].quantity} -{' '}
          {this.props.selectedFood[key].name} -{' '}
          {this.props.selectedFood[key].calories} calories {'  '}
        </div>
      );
    });
  }
}