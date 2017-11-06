import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
constructor() {
  super();
  this.state = {
    count1: 0,
    count2: 0,
    count3: 0
  };

  this.increment = this.increment.bind(this)
  this.decrement = this.decrement.bind(this)
  this.total = this.total.bind(this)
}

  increment(counter, multiplier) {
    this.setState({ [counter]: this.state[counter] + multiplier })
  }

  decrement(counter, multiplier) {
    this.setState({ [counter]: this.state[counter] - multiplier })
  }

  total() {
    return this.state.count1 + this.state.count2 + this.state.count3
  }

  render() {
    return (
      <div className="page-center-frame">
        {(Object
          .keys(this.state))
          .map((counter, index) =>
            <Counter multiplier={index + 1} increment={() => this.increment(counter, index + 1)} decrement={() => this.decrement(counter, index + 1)} count={this.state[counter]} />
        )}
        <div className="total">
          <span>Total: {this.total()}</span>
        </div>
      </div>
    );
  }
}

export default App;
