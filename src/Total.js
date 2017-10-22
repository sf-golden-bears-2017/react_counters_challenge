import React from 'react';
import './Counter.css';

class Total extends React.Component {
  render() {
    return (
      <div className="counter">
        <div className="count">{this.props.total}</div>
      </div>
    );
  }
}

export default Total
