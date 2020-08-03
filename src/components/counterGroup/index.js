import React, { Component } from "react";
import Counter from "../counter/index";
import store from "../../store/index"

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initArray: [...Array(0).keys()],
      totalValue: 0
    }
  }

  getInitArray = () => {
    return this.state.initArray.map((key) => (
      <Counter
        key={key}
        getTotalValue={this.getTotalValue}
      />
    ));
  };

  onChangeSize = (e) => {
    this.setState({
      initArray: [...Array(e.target.value ? parseInt(e.target.value) : 0).keys()]
    })

  };

  getTotalValue = () => {
    this.setState({
      totalValue: store.getState().totalValue
    })
  }

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
