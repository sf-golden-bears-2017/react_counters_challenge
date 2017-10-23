import React from 'react';
import './Counter.css';
import './App.css';


class NewCounter extends React.Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.add}>
          <input type="text" name="number" />
          <br />
          <input type="submit" value="Add Counter"/>
        </form>
      </div>
    );
  }
}

export default NewCounter
