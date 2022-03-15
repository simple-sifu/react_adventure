import React from "react";
import Square from "./Square";

class Game extends React.Component {
  constructor(props) {
    console.log("Game.constructor");
    super(props);
    this.state = {
      toggle: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Game.handleClick");
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    console.log("Game.render");
    return (
      <div className="game">
        <Square onClick={this.handleClick} toggle={this.state.toggle} />
      </div>
    );
  }
}

export default Game;
