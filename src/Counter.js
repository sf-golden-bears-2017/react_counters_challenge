import React from 'react';
import './Counter.css';

class Counter extends React.Component {


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
        <div className="count">{this.props.count}</div>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

export default Counter
