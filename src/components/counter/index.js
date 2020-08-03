import React, { Component } from "react";
import store from "../../store/index"

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  subCount = () => {
    this.setState((preState) => ({ value: preState.value - 1 }));
    const action = {
      type: 'DECREMENT',
      value: 1
    }
    store.dispatch(action);
  };

  addCount = () => {
    this.setState((preState) => ({ value: preState.value + 1 }));
    const action = {
      type: 'INCREMENT',
      value: 1
    }
    store.dispatch(action);
  };

  componentWillUnmount  () {
    const action = {
      type: 'DECREMENT',
      value: this.state.value
    }
    store.dispatch(action);
  }

  render() {
    return (
      <div>
        <button onClick={this.subCount}>-</button>
        <mark style={{ fontSize: "30px", background: "none" }}>
          {this.state.value}
        </mark>
        <button onClick={this.addCount}>+</button>
      </div>
    );
  }
}

export default Counter;
