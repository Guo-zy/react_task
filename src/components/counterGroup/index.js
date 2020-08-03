import React, { Component } from "react";
import Counter from "../counter/index";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initArray: [...Array(0).keys()],
      size: 0,
      totalValue: 0,
    };
  }

  getInitArray = () => {
    return this.state.initArray.map((key) => (
      <Counter
        key={key}
        onAdd={this.onAdd}
        onSub={this.onSub}
        onChangeSize={this.state.size}
      />
    ));
  };

  onAdd = () => {
    this.setState((preState) => {
      return { totalValue: preState.totalValue + 1 };
    });
  };

  onSub = () => {
    this.setState((preState) => {
      return {
        totalValue: preState.totalValue - 1,
      };
    });
  };

  onChangeSize = (e) => {
    if (parseInt(e.target.value) !== this.state.size) {
      this.setState({
        initArray: [
          ...Array(e.target.value ? parseInt(e.target.value) : 0).keys(),
        ],
        totalValue: 0,
        size : e.target.value ? parseInt(e.target.value) : 0,
      });
    }
  };

  render() {
    return (
      <div>
        <label htmlFor="insertSize">
          Group Size :
          <input id="insertSize" defaultValue={0} onBlur={this.onChangeSize} />
        </label>
        <br />
        <label>TotalValue : {this.state.totalValue}</label>
        {this.getInitArray()}
      </div>
    );
  }
}

export default CounterGroup;
