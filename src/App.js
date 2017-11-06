import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter multiplier={1} />
        <Counter multiplier={2} />
        <Counter multiplier={3} />
      </div>
    );
  }
}

export default App;
