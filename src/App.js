import React from 'react';
import Counter from './Counter';
import Total from './Total';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { changeBy: 1, count: 0 },
        { changeBy: 2, count: 0 },
        { changeBy: 3, count: 0 },
        { changeBy: 4, count: 0 },
        { changeBy: 5, count: 0 }
      ],
      total: 0
    };

    this.updateCounter = this.updateCounter.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
  }

  updateCounter(index, sign) {
    let counters = this.state.counters;
    counters[index].count += sign * counters[index].changeBy
    const total = this.calculateTotal()
    this.setState({ counters , total })
  }

  calculateTotal() {
    const total = this.state.counters.reduce((sum, num) => {
      return sum + num.count
    }, 0);
    return total;
  }

  render() {
    return (
      <div className="page-center-frame">
        {this.state.counters.map((element, index)=>
          <Counter counter={element}
          increment={() => this.updateCounter(index,1)}
          decrement={() => this.updateCounter(index,-1)}
          key={index} />
        )}
        <Total total={this.state.total}/>
      </div>
    );
  }
}

export default App;
