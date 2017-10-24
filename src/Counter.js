import React from 'react'
import './Counter.css'

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button onClick={this.props.increment}>+</button>
        <div className="count">{this.props.counter.count}</div>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.remove}>Remove</button>
      </div>
    )
  }
}

export default Counter
