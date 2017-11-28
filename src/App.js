import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default App;
