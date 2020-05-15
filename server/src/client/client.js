//  the rentry point of the client  code base
// intended to run only on the client side

// treat this file as a normal react normal index setup
// we can do the normal set in this app like we do in normal react apps
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Routes from "./Routets";
import reducers from "./reducers";

// note: at this point the sever has already sent the
// html template to the client so we can render this react
// component to that "root" element

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
// hydrate is like render

// note: the BrowserRouter will not work on the server side
// there we need to use StaticRouter
