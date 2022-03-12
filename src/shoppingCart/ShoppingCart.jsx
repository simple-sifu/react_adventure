/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";

class ShoppingCart extends React.Component {
  constructor(props) {
    console.log("ShoppingCart.constructor()");
    super(props);
    this.state = {
      toggle: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("ShoppingCart.handleClick()");
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    console.log("ShoppingCart.render()");
    return (
      <div>
        <h1>Shopping List</h1>
        <p id="first">Get it done today</p>
        <p class="second">No excuses</p>
        <input id="userInput" type="text" placeholder="enter items" />
        <button id="enter">Enter</button>
        <ul>
          <li random="23">Notebook</li>
          <li>Jello</li>
          <li>Spinach</li>
          <li>Rice</li>
          <li>Birthday Cake</li>
          <li>Candles</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingCart;
