require("file-loader?name=[name].[ext]!../index.html");
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import App from './App';


// Action Increment
const incrementAction = () => {
  return {
    type: 'INCREMENT'
  };
};
const decrementAction = () => {
  return {
    type: 'DECREMENT'
  };
};

// Reducer, Action is INCREMENT, state is initial state
const counterReducer = (state=0, action) => {
  // console.log("counterReducer: action.type=", action.type);
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
        return state - 1
    }
}

let store = createStore(counterReducer);

// Display it in console
store.subscribe(() => console.log("store.dispatch() -", store.getState()));


// DISPATCH   state=0
store.dispatch(incrementAction()); // state = 1
store.dispatch(incrementAction()); // state = 2
store.dispatch(incrementAction()); // state = 3
store.dispatch(incrementAction()); // state = 4
store.dispatch(decrementAction()); // state = 1

ReactDOM.render(<App />, document.getElementById('root'))
