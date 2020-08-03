import React, { Component } from "react";
import Counter from "../counter/index";
import store from "../../store/index"

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
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
    const action = {
      type: 'INCREMENT',
      value: 1
    }
    store.dispatch(action)
  };

  onSub = () => {
    const action = {
      type: 'DECREMENT',
      value: 1
    }
    store.dispatch(action)
  };

  onChangeSize = (e) => {
    const action = {
      type: 'change_group_size',
      value: e.target.value
    }
    store.dispatch(action)
  };

  handleStoreChange = () => {
    this.setState(store.getState);
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
