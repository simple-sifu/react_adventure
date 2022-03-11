/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import "./Square.scss";

class Square extends React.Component {
  constructor(props) {
    console.log("Square.constructor()");
    super(props);
    this.state = {
      toggle: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Square.handleClick()");
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    console.log("Square.render()");
    return (
      <button className="square" onClick={() => this.handleClick()}>
        {this.state.toggle ? "X" : "O"}
      </button>
    );
  }
}

export default Square;
