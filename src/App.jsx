import React, { Component } from "react";

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter using Class Component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        {/* <button onClick={this.reset}>Reset</button> */}
      </div>
    );
  }
}



export default App;

