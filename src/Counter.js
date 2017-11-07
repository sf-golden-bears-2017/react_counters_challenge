import React from 'react';
import './Counter.css';


class Counter extends React.Component {

  //   this.increment = this.increment.bind(this)
  //   this.decrement = this.decrement.bind(this)
  // }

  // increment() {
  //   this.setState({ count: this.state.count + this.props.myProp })
  // }

  // decrement() {
  //   this.setState({ count: this.state.count - this.props.myProp })
  // }

  render() {
    return (
      <div className="counter">
        <button onClick={this.props.increment}>+</button>
        <div className="count">{this.props.counter.count}</div>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.unmountMe}>Delete</button>
      </div>
    );
  }
}

export default Counter
