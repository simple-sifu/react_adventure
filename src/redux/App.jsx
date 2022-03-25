import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
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

// Reducer
const counterReducer = (state=0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    }
}

let store = createStore(counterReducer);

// Display it in console
store.subscribe(() => console.log(store.getState()));


// DISPATCH
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());


// Dispatch
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)