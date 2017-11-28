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
      ],
      newChangeBy: 1
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.remove = this.remove.bind(this)
    this.addNewCounter = this.addNewCounter.bind(this)
    this.setNewChangeBy = this.setNewChangeBy.bind(this)
  }

  addNewCounter(event) {
    event.preventDefault()
    this.state.counters.push({count: 0, changeBy: this.state.newChangeBy})
    this.setState({ counters: this.state.counters })
  }

  remove(index) {
    this.state.counters.splice(index, 1)
    this.setState({ counters: this.state.counters })
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

setNewChangeBy(event) {
  this.setState({newChangeBy: Number(event.target.value)})
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
          remove={() => this.remove(index)}
         />
      )}
      <form action="" onSubmit={this.addNewCounter}>
        <input
          type="number"
          onChange={this.setNewChangeBy}
          value={this.state.newChangeBy}
        />
        <button>
        Add Fancy New Counter
        </button>
      </form>
      <p>
        Total: { this.total()}
      </p>
      </div>
    );
  }
}

export default App;
