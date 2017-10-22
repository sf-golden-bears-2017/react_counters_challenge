import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { changeBy: 1, count: 0 },
        { changeBy: 2, count: 0 },
        { changeBy: 3, count: 0 }
      ],
      total: 0
    };

    this.updateCounter = this.updateCounter.bind(this)
    this.updateTotal = this.updateTotal.bind(this)
  }
  updateCounter(index, sign) {
    let counters = this.state.counters;
    counters[index].count += sign * counters[index].changeBy
    let total = this.updateTotal()
    this.setState({ counters , total})
  }

  updateTotal() {
    let total = this.state.counters.reduce((sum, num) => {
      return sum + num.count
    }, 0);
    return total;
  }

  render() {
    return (
      <div className="page-center-frame">
        <Counter counter={this.state.counters[0]}
        i={() => this.updateCounter(0,1)}
        d={() => this.updateCounter(0,-1)} />

        <Counter counter={this.state.counters[1]}
        i={() => this.updateCounter(1,1)}
        d={() => this.updateCounter(1,-1)} />

        <Counter counter={this.state.counters[2]}
        i={() => this.updateCounter(2,1)}
        d={() => this.updateCounter(2,-1)} />
      </div>
    );
  }
}

export default App;
