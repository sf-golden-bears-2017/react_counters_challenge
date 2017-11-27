import React from 'react';
import './Counter.css';
import './Counter.css';
class Counter extends React.Component {


  render() {
    return (
      <div className="counter">
        <button onClick={this.props.increment}>+</button>
        <div className="count">{this.props.count}</div>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

export default Counter