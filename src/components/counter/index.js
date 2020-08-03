import React, { Component } from "react";
import store from "../../store/index";
import { addOneAction, subOneAction, subValueAction } from "../../store/actionCreators"

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  subCount = () => {
    this.setState((preState) => ({ value: preState.value - 1 }));
    const action = subOneAction();
    store.dispatch(action);
    this.props.getTotalValue();
  };

  addCount = () => {
    this.setState((preState) => ({ value: preState.value + 1 }));
    const action = addOneAction();
    store.dispatch(action);
    this.props.getTotalValue();
  };

  componentWillUnmount() {
    const action = subValueAction(this.state.value);
    store.dispatch(action);
    this.props.getTotalValue();
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
