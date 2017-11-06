import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count1:0,
      count2:0,
      count3:0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment(count,number) {
    this.setState({ [count]: this.state[count] + number })
  }

  decrement(count,number) {
    this.setState({ [count]: this.state[count] - number })
  }

  total(){
    return this.state.count1 + this.state.count2 + this.state.count3
  }

  render() {
    return (
      <div className="page-center-frame">
        <Counter myProp={this.state.count1} myProp3={() => this.increment("count1",1)} myProp4={() => this.decrement("count1", 1)}/>
        <Counter myProp={this.state.count2} myProp3={() => this.increment("count2",2)} myProp4={() => this.decrement("count2", 2)}  />
        <Counter myProp={this.state.count3} myProp3={() => this.increment("count3",3)} myProp4={() => this.decrement("count3", 3)} />
        <h1>Total: {this.total()}</h1>
      </div>
    );
  }
}

export default App
