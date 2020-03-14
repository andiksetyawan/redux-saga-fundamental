import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";

import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} from "./actions/counter";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.inc}>Increment</button>
        <button onClick={this.props.dec}>Decrement</button>
        <button onClick={this.props.incAsync}>Increment Async</button>
        <button onClick={this.props.decAsync}>Decrement Async</button>
        <br />
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  inc: () => dispatch(increment()),
  dec: () => dispatch(decrement()),
  incAsync: () => dispatch(incrementAsync()),
  decAsync: () => dispatch(decrementAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
