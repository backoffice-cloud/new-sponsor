import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { globalState } from "./redux/store";

import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(globalState, composeEnhancers)}>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
