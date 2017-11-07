import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor () {
    super()
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement (e) {
    e.preventDefault();
    // var currentCount = e.target.parentElement.children[1].textContent
    // debugger

    this.props.myIncrement(this.props.index, this.props.countBy)
  }

  handleDecrement (e) {
    e.preventDefault();
    this.props.myDecrement(this.props.index, this.props.countBy)
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.handleIncrement}>+</button>
        <div className="count">{this.props.count}</div>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter
