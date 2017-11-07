import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    // this.increment = this.increment.bind(this)
    this.myIncrement = this.myIncrement.bind(this)
    // this.decrement = this.decrement.bind(this)
    this.myDecrement = this.myDecrement.bind(this)

    this.state = {
      // countValues: [0, 0, 0]
      countValues: [
      {count: 0, countBy: 1},
      {count: 0, countBy: 2},
      {count: 0, countBy: 3}
      ]
    };
  }

  myIncrement(index, incrementValue) {
    const countArray = this.state.countValues
    countArray[index].count = (countArray[index].count + incrementValue)
    this.setState({ countValues: countArray })
  }

  myDecrement(index, incrementValue) {
    const countArray = this.state.countValues
    countArray[index].count = (countArray[index].count - incrementValue)
    this.setState({ countValues: countArray })
  }

  myTotal() {
    // This shit right here......... NAY #fucker
   var total = this.state.countValues[0].count + this.state.countValues[1].count + this.state.countValues[2].count
   return total;
  }

  render() {
    return (
      <div className="page-center-frame">
        {/*<Counter myIncrement={() => this.myIncrement(1, "count1")} myDecrement={() => this.myDecrement(1, "count1")} count={this.state.count1} />
        <Counter myIncrement={() => this.myIncrement(2, "count2")} myDecrement={() => this.myDecrement(2, "count2")} count={this.state.count2} />
        <Counter myIncrement={() => this.myIncrement(3, "count3")} myDecrement={() => this.myDecrement(3, "count3")} count={this.state.count3} />*/}
        <ul>
          {this.state.countValues.map((value, index) =>
              <li>
                <Counter
                  myIncrement={this.myIncrement}
                  myDecrement={this.myDecrement}
                  count={this.state.countValues[index].count}
                  countBy={this.state.countValues[index].countBy}
                  index={index}
                  // myTotal={}
                />
              </li>
            )}
          </ul>
        <div>Total: {this.myTotal()}</div>
      </div>
    );
  }

}

export default App;
