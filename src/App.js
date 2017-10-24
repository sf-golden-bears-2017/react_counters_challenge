import React from 'react'
import Counter from './Counter'
import Total from './Total'
import NewCounter from './NewCounter'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counters: [
        { changeBy: 1, count: 0 },
        { changeBy: 2, count: 0 },
        { changeBy: 3, count: 0 }
      ],
      total: 0
    }

    this.updateCounter = this.updateCounter.bind(this)
    this.calculateTotal = this.calculateTotal.bind(this)
    this.removeCounter = this.removeCounter.bind(this)
    this.addCounter = this.addCounter.bind(this)
  }

  addCounter(event) {
    event.preventDefault()
    let changeByVal = event.target.number.value

    if (!isNaN(changeByVal)) {
      let counters = this.state.counters
      let newCounterHash = {}


      newCounterHash.changeBy = changeByVal
      newCounterHash.count = 0
      counters.push(newCounterHash)

      document.getElementById("new-counter-form").reset();
      this.setState({ counters })
    }
  }

  removeCounter(index) {
    let counters = this.state.counters
    counters.splice(index, 1)
    const total = this.calculateTotal()
    this.setState({ counters , total })
  }

  updateCounter(index, sign) {
    let counters = this.state.counters
    counters[index].count += sign * counters[index].changeBy
    const total = this.calculateTotal()
    this.setState({ counters , total })
  }

  calculateTotal() {
    const total = this.state.counters.reduce((sum, num) => {
      return sum + num.count
    }, 0)
    return total
  }

  render() {
    return (
      <div>
        <div className="page-center-frame">
          {this.state.counters.map((element, index)=>
            <Counter counter={element}
            increment={() => this.updateCounter(index,1)}
            decrement={() => this.updateCounter(index,-1)}
            remove={() => this.removeCounter(index)}
            key={index} />
          )}
          <Total total={this.state.total}/>
        </div>
        <div className="page-center-frame">
          <NewCounter add={this.addCounter} clear={true}/>
        </div>
      </div>
    )
  }
}

export default App
