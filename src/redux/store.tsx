import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore , applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"

class AppProvider extends Component {
  initialState = {
    listItems: []
  };

  store = createStore(reducer, this.initialState , applyMiddleware(thunk));
  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}

export default AppProvider;
