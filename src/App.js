import React, { Component } from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
