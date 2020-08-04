import React, { Component } from "react";
import Counter from "../counter/index";
import { connect } from "react-redux";
import {
  addOneAction,
  subValueAction,
} from "../../store/actionCreators";
import PropTypes from "prop-types";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initArray: [...Array(0).keys()],
    };
  }

  getInitArray = () => {
    return this.state.initArray.map((key) => (
      <Counter
        key={key}
        addOneAction={this.props.addOneAction}
        subValueAction={this.props.subValueAction}
      />
    ));
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

CounterGroup.propTypes = {
  totalValue: PropTypes.number.isRequired,
  addOneAction: PropTypes.func.isRequired,
  subValueAction: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  const { totalValue } = state.counter;
  return { totalValue };
};


const mapDispatchToProps = {
  addOneAction,
  subValueAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);
