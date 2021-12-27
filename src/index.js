// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import Store from "./Redux/Store/index";
// import { Provider } from "react-redux";
// ReactDOM.render(
//   <Provider store={Store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);