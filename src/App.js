import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page-center-frame">
        <Counter myProp={1} />
        <Counter myProp={2} />
        <Counter myProp={3} />
      </div>
    );
  }
}

export default App;
