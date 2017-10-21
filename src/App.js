import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter changeBy={1} />
        <Counter changeBy={2} />
        <Counter changeBy={3} />
      </div>
    );
  }
}

export default App;
