import React from "react";
import { Component } from "react";


export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button
          onClick={this.handleDecrement}
          disabled={this.state.count === 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}
