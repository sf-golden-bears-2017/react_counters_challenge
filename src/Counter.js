import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({ count: this.state.count + this.props.changeBy })
  }

  decrement() {
    this.setState({ count: this.state.count - this.props.changeBy })
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+</button>
        <div className="count">{this.state.count}</div>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter
