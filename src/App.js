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

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment(index) {
    let counters = this.state.counters;
    counters[index].count += counters[index].changeBy
    this.setState({ counters })
  }

  decrement(index) {
    let counters = this.state.counters;
    counters[index].count -= counters[index].changeBy
    this.setState({ counters })
  }
  render() {
    return (
      <div className="page-center-frame">
        <Counter counter={this.state.counters[0]}
        i={() => this.increment(0)}
        d={() => this.decrement(0)} />

        <Counter counter={this.state.counters[1]}
        i={() => this.increment(1)}
        d={() => this.decrement(1)} />

        <Counter counter={this.state.counters[2]}
        i={() => this.increment(2)}
        d={() => this.decrement(2)} />
      </div>
    );
  }
}

export default App;
