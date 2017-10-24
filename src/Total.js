import React from 'react'
import './Counter.css'
import './App.css'


class Total extends React.Component {
  render() {
    return (
      <div className="counter">
      <span id="total">Total</span>
        <div className="count">{this.props.total}</div>
      </div>
    )
  }
}

export default Total
