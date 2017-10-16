import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter myProp={2} />
        <Counter myProp={4} />
        <Counter myProp={8} />
      </div>
    );
  }
}

export default App;
