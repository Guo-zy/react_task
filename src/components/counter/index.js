import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  subCount = () => {
    this.setState((preState) => ({ value: preState.value - 1 }));
    this.props.subOneAction();
  };

  addCount = () => {
    this.setState((preState) => ({ value: preState.value + 1 }));
    this.props.addOneAction();        
  };

  componentWillUnmount() {
    this.props.subValueAction(this.state.value);
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
