import React from 'react';
import Counter from './Counter';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counters: [1, 2],
      newChangeBy: 1
      // {count:0, changeBy: 1}, {count:0, changeBy: 2}, {count:0, changeBy: 3}
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.removeCounter = this.removeCounter.bind(this)
    // this.addCounter = this.addCounter.bind(this)
    this.total = this.total.bind(this)
  }

  componentDidMount(){
    axios.get(`http://numbers-api.herokuapp.com/`).then(res => {
      const hunter_counters = res.data
      this.setState({counters: hunter_counters})
      console.log(res.status)
    });
  }

  updateCounter(index, counter_id){
    const counter = this.state.counters[index]
    axios.put(`http://numbers-api.herokuapp.com/counters/${counter_id}`, { value: counter.value += 1})
  }

  increment(index) {
    const oldCounterArray = this.state.counters
    oldCounterArray[index].value += 1
    this.setState({ counters: oldCounterArray })
  }

  decrement(index) {
    const oldCounterArray = this.state.counters
    oldCounterArray[index].value -= 1
    this.setState({ counters: oldCounterArray })
  }

  removeCounter(index) {
    const oldCounterArray = this.state.counters
    oldCounterArray.splice(index, 1)
    this.setState({ counters: oldCounterArray })
  }

  // addCounter(e) {
  //   e.preventDefault()
  //   const oldCounterArray = this.state.counters
  //   oldCounterArray.push({count: 0, changeBy: this.state.newChangeBy})
  //   this.setState({ counters: oldCounterArray })
  // }

  total(){
    return this.state.counters.reduce(function(total, counter) {
      return total + counter.value;
    }, 0)
  }

  render() {
    return (
      <div className="page-center-frame">
        {this.state.counters.map((counter, index) =>
            <Counter counter={ counter } increment={() => this.increment(index)} decrement={() => this.decrement(index)}  unmountMe={() => this.removeCounter(index)} />
          )}
          <h1>Total: {this.total()}</h1>
          <form onSubmit={this.addCounter}>
            <input type="number" onChange={(e) => this.setState({newChangeBy: parseInt(e.target.value)})} value={this.state.newChangeBy} />
            <input type="submit" value="Create New Counter"/>
          </form>
      </div>
    );
  }
}

export default App

  // render() {
  //   return (
  //     <div className="page-center-frame">
  //       <Counter myProp={this.state.count1} myProp3={() => this.increment("count1",1)} myProp4={() => this.decrement("count1", 1)}/>
  //       <Counter myProp={this.state.count2} myProp3={() => this.increment("count2",2)} myProp4={() => this.decrement("count2", 2)}  />
  //       <Counter myProp={this.state.count3} myProp3={() => this.increment("count3",3)} myProp4={() => this.decrement("count3", 3)} />
  //       <h1>Total: {this.total()}</h1>
  //     </div>
  //   );
  // }


  // $('input').on('change', this.setValue)

  // setValue(event) {
  //   event.preventDefault()

  //   $('input').value = event.target.value
  // }
