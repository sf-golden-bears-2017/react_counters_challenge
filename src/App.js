import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
constructor() {
  super();
  this.state = {
    counters: [
      {count: 0, multiplier: 1},
      {count: 0, multiplier: 2},
      {count: 0, multiplier: 3}
    ]
  };

  this.increment = this.increment.bind(this)
  this.decrement = this.decrement.bind(this)
  this.total = this.total.bind(this)
  this.addCounterButton = this.addCounterButton.bind(this)
}

  increment(index) {
    const counters = this.state.counters
    counters[index].count += counters[index].multiplier
    this.setState({counters})
  }

  decrement(index) {
    const counters = this.state.counters
    counters[index].count -= counters[index].multiplier
    this.setState({counters})
  }

  total() {
    return this.state.counters.reduce((sum, counter) => sum + counter.count, 0);
  }

  addCounterButton() {
    const counters = this.state.counters
    counters.push({count: 0, multiplier: (this.state.counters.length + 1)})
    this.setState({counters})
  }

  render() {
    return (
      <div className="parent-container">
        <div className="page-center-frame">
          {(this.state.counters)
            .map((counter, index) =>
              <Counter increment={() => this.increment(index)} decrement={() => this.decrement(index)} count={counter.count} />
          )}

          { /* <Counter multiplier={1} increment={() => this.increment("count1", 1)} decrement={() => this.decrement("count1", 1)} count={this.state.count1} />
          <Counter multiplier={2} increment={() => this.increment("count2", 2)} decrement={() => this.decrement("count2", 2)} count={this.state.count2} />
          <Counter multiplier={3} increment={() => this.increment("count3", 3)} decrement={() => this.decrement("count3", 3)} count={this.state.count3} /> */ }

          <div className="total">
            <span>Total: {this.total()}</span>
          </div>

          <div className="add-button">
            <button onClick={this.addCounterButton}>+ counter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
