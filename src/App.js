import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counts: [
        {value: 0, countBy: 2},
        {value: 0, countBy: 4},
        {value: 0, countBy: 8}
      ],
      nextCountBy: ""
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.addNewCounter = this.addNewCounter.bind(this)
  }

  addNewCounter(event) {
    event.preventDefault()
    const newCounts = this.state.counts.concat([{value: 0, countBy: parseInt(this.state.nextCountBy)}])
    this.setState({ counts: newCounts, nextCountBy: "" })
  }

  removeCounter(index) {
    this.state.counts.splice(index, 1)
    this.setState({ counts: this.state.counts })
  }

  increment(index) {
    const {value, countBy} = this.state.counts[index]
    
    const newData = {
      value: value + countBy,
      countBy: countBy
    }

    this.setCounterDataAt(index, newData)
  }

  decrement(index) {
    const {value, countBy} = this.state.counts[index]
    
    const newData = {
      value: value - countBy,
      countBy: countBy
    }

    this.setCounterDataAt(index, newData)
  }

  setCounterDataAt(index, data) {
    this.state.counts[index] = data
    this.setState({ counts: this.state.counts })
  }

  total(){
    return this.state.counts.reduce(function(total, counterData) {
      return total + counterData.value
    }, 0)
  }

  handleInput(event) {
    this.setState({ nextCountBy: event.target.value })
  }

  render() {
    return (
      <div className="page-center-frame">
        {this.state.counts.map((counterData, index) =>
          <Counter
            value={counterData.value}
            removeCounter={() => this.removeCounter(index)}
            increment={() => this.increment(index)}
            decrement={() => this.decrement(index)}
            />
        )}
        <p>Total: {this.total()}</p>

        <form action="" onSubmit={this.addNewCounter}>
          <input
            type="number"
            onChange={this.handleInput}
            value={this.state.nextCountBy}
            />
          <button>Add Counter</button>
        </form>
      </div>
    );
  }
}

export default App;
