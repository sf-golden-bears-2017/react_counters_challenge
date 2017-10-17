import React from 'react';
import Counter from './Counter';
import './App.css';
import Form from './Form'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: [{currentValue: 0, countBy: 2},
              {currentValue: 0, countBy: 4},
              {currentValue: 0, countBy: 8}],
      total: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.addCounter = this.addCounter.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
    this.totalCount = this.totalCount.bind(this);
  }

  increment(id) {
    const count = this.state.count.slice();
    count[id].currentValue += count[id].countBy;
    this.setState({ count: count },
    () => { this.totalCount(); });
  }


  decrement(id, countBy) {
    const count = this.state.count.slice();
    count[id].currentValue -= this.state.count[id].countBy;
    this.setState({ count: count },
    () => { this.totalCount(); });
  }

  totalCount() {
    return this.state.count.reduce((total, value) => {
      return parseInt(total) + parseInt(value.currentValue);
    }, 0)
  }

  addCounter(event) {
    event.preventDefault();
    this.setState({ count: this.state.count.concat([{currentValue: 0, countBy: parseInt(event.target.counter.value)}])});
    document.getElementById("addForm").reset();
  }

  removeCounter(event) {
    event.preventDefault();
    const count = this.state.count.slice();
    count.splice(parseInt(event.target.counter.value) + 1, 1);
    this.setState({count: count});
    document.getElementById("removeForm").reset();
  }

  render() {
    return (
      <div>
        <div className="page-center-frame">
          {this.state.count.map((count, index) =>
            (
              <Counter
                key={index}
                id={index}
                count={count.currentValue}
                increment={this.increment}
                decrement={this.decrement}
              />
            )
          )}
        </div>
        <Form
          removeCounter={this.removeCounter}
          addCounter={this.addCounter}
          totalCount={this.totalCount}
         />
      </div>
    );
  }
}

export default App;
