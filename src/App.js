import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
constructor() {
  super();
  this.state = {
    count1: 0,
    count2: 0,
    count3: 0,
    total: 0
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
        <Counter multiplier={1} increment={() => this.increment("count1", 1)} decrement={() => this.decrement("count1", 1)} count={this.state.count1} />
        <Counter multiplier={2} increment={() => this.increment("count2", 2)} decrement={() => this.decrement("count2", 2)} count={this.state.count2} />
        <Counter multiplier={3} increment={() => this.increment("count3", 3)} decrement={() => this.decrement("count3", 3)} count={this.state.count3} />
        <div className="total">
          <span>Total: {this.total()}</span>
        </div>
      </div>
    );
  }
}

export default App;
