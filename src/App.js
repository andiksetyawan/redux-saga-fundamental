import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";

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
  inc: () => dispatch({ type: "INCREMENT" }),
  dec: () => dispatch({ type: "DECREMENT" }),
  incAsync: () => dispatch({ type: "INCREMENT_ASYNC" }),
  decAsync: () => dispatch({ type: "DECREMENT_ASYNC" })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
