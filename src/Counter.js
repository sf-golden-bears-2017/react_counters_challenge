import React from 'react';
import './Counter.css';

const Counter = (props) => {
  return (
    <div className="counter">
      <button onClick={() => props.increment(props.id)}>+</button>
      <div className="count">{props.count}</div>
      <button onClick={() => props.decrement(props.id)}>-</button>
    </div>
  );
};

export default Counter
