import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import store from './store';
import { createStore } from 'redux';
import App from './App';

// Action Increment
const increment = () => {
  return {
    type: 'INCREMENT'
  };
};
const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

// Reducer
const counter = (state=0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    }
}

let store = createStore(counter);

// Display it in console
store.subscribe(() => console.log(store.getState()));


// DISPATCH
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());


// Dispatch
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)