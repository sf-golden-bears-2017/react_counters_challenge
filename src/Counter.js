import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button onClick={this.props.i}>+</button>
        <div className="count">{this.props.counter.count}</div>
        <button onClick={this.props.d}>-</button>
      </div>
    );
  }
}

export default Counter
