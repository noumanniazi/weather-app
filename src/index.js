// lib
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

// src
import App from "./App";
import reducer from './reducer';

// We can extract the store configuration into a separate file but for our simple case I am creating it here 
function configureStore() {
  return createStore(
   reducer,
    applyMiddleware(thunk)
  );
 }


ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
