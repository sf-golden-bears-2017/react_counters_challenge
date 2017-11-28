import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counters: [
        { count: 0, changeBy: 1 },
        { count: 0, changeBy: 2 },
        { count: 0, changeBy: 3 }
      ]
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment(index) {
    let currentCounter = this.state.counters[index]
    currentCounter.count += currentCounter.changeBy

    this.setState({ counters: this.state.counters })
  }

  decrement(index) {
    let currentCounter = this.state.counters[index]
    currentCounter.count -= currentCounter.changeBy

    this.setState({ counters: this.state.counters })
  }

total() {
  return this.state.counters.reduce(function(total, counterData) {
    return total + counterData.count
  }, 0)
}

  render() {
    return (
      <div className="page-center-frame">
      {this.state.counters.map((counterData, index) =>
        <Counter
          key={index}
          count={ counterData.count}
          increment={() => this.increment(index)}
          decrement={() => this.decrement(index)}
         />
      )}
      <p>
        Total: { this.total()}
      </p>
      </div>
    );
  }
}

export default App;
