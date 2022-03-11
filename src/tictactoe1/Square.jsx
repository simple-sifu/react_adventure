import React from "react";

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.toggle ? "X" : "O"}
    </button>
  );
}

export default Square;
