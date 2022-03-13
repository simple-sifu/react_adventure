/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";

class ShoppingCart extends React.Component {
  constructor(props) {
    console.log("ShoppingCart.constructor()");
    super(props);
    this.state = {
      text: "",
      toDoItems: ["Apples", "Jello", "Spinach", "Milk"],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addToDoItems = this.addToDoItems.bind(this);
  }

  handleChange(e) {
    console.log("ShoppingCart.handleChange()");
    this.setState({ text: e.target.value });
  }

  addToDoItems(){
    console.log("ShoppingCart.addToDoItems()")
    this.setState({
      toDoItems: this.state.toDoItems.concat(this.state.text), 
      text: ""
    })
  }

  render() {
    console.log("ShoppingCart.render()");
    return (
      <div>
        <h1>Shopping List</h1>
        <p id="first">Get it done today</p>
        <p className="second">No excuses</p>
        <input 
          id="userInput" 
          type="text" 
          placeholder="enter items"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button id="enter" onClick={() => this.addToDoItems()}>Enter</button>
        <ul>
            {  this.state.toDoItems.map( (toDo) => {
                return <li key={toDo}>{toDo}</li>
              })
            }
        </ul>
      </div>
    );
  }
}

export default ShoppingCart;
