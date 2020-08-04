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
    this.props.subValueAction(1);
  };

  addCount = () => {
    this.setState((preState) => ({ value: preState.value + 1 }));
    this.props.addOneAction(1);        
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

Counter.defaultProps = {
  value : 0
}

export default Counter;
