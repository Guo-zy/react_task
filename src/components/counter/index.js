import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      size: this.props.onChangeSize,
    };
  }

  subCount = () => {
    this.setState((preState) => ({ value: preState.value - 1 }));
    this.props.onSub();
  };

  addCount = () => {
    this.setState((preState) => ({ value: preState.value + 1 }));
    this.props.onAdd();
  };

  static getDerivedStateFromProps(props, state) {
    if (props.onChangeSize !== state.size) {
      return {
        value: 0,
        size: props.onChangeSize,
      };
    }
    return null;
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
