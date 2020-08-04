import React, { Component } from "react";
import Counter from "../counter/index";
import { connect } from "react-redux";
import {
  addOneAction,
  subOneAction,
  subValueAction,
} from "../../store/actionCreators";


class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initArray: [...Array(0).keys()],
    };
  }

  getInitArray = () => {
    return this.state.initArray.map((key) => <Counter key={key} />);
  };

  onChangeSize = (e) => {
    this.setState({
      initArray: [
        ...Array(e.target.value ? parseInt(e.target.value) : 0).keys(),
      ],
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="insertSize">
          Group Size :
          <input id="insertSize" defaultValue={0} onBlur={this.onChangeSize} />
        </label>
        <br />
        <label>TotalValue : {this.props.totalValue}</label>
        {this.getInitArray()}
      </div>
    );
  }
}

const mapStateToProps = (state) => state.counter.totalValue;
// const { totalValue } = state.counter;
// return { totalValue };

const mapDispatchToProps = (dispatch) => ({
  addOneAction: () => dispatch(addOneAction()),
  subOneAction: () => dispatch(subOneAction()),
  subValueAction: (value) => dispatch(subValueAction(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);
