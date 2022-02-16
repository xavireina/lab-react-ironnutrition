import React, { Component } from 'react';
import Food from './Food';

export default class FoodBox extends Component {
  render() {

    const updateQty = (qty, i) => {
      this.props.foods[i].quantity = qty;
    };

    return this.props.foods.map((food, i) => {
      console.log({ food });
      return (
        <div className="item">
          <Food
            food={food}
            addFood={this.props.addFood}
            updateQty={updateQty}
            id={i}
          />
        </div>
      );
    });
  }
}