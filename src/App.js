import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: [0, 0, 0]
    };

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment(countBy, index ) {
    const count = this.state.count.slice()
    count[index] += countBy
    this.setState({ count: count })
  }

  decrement(countBy, index) {
    const count = this.state.count.slice()
    count[index] -= countBy
    this.setState({ count: count })
  }

  render() {
    return (
      <div className="page-center-frame">
        <Counter
        count= { this.state.count[0] }
        increment={ () => this.increment(2, 0) }
        decrement={ () => this.decrement(2, 0) }
        />
        <Counter
        count= { this.state.count[1] }
        increment={ () => this.increment(4, 1) }
        decrement={ () => this.decrement(4, 1) }
        />
        <Counter
        count= { this.state.count[2] }
        increment={ () => this.increment(8, 2) }
        decrement={ () => this.decrement(8, 2) }
        />
      </div>
    );
  }
}

export default App;
