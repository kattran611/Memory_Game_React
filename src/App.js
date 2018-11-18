import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: array(8).fill(
        {matching: false,
         matched: false,
        }
      ),
    }
  }
  render() {
    return (
      <div>
        <h1>Memory Game</h1>
      </div>
    );
  }
}

export default App;
