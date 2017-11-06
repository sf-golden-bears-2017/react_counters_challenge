import React from 'react';
import './Counter.css';


class Counter extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0
  //   };

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
        <button onClick={this.props.myProp3}>+</button>
        <div className="count">{this.props.myProp}</div>
        <button onClick={this.props.myProp4}>-</button>
      </div>
    );
  }
}

export default Counter
