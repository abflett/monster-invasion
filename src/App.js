import React, { Component } from 'react';
import Stats from '../src/components/stats/stats'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 3300,
      highScore: 4,
      health: 88
    };
  }

  render() {
    return (
      <React.Fragment>
        <Stats score={this.state.score} health={this.state.health} highscore={this.state.highScore} />
      </React.Fragment>
    );
  }
}

export default App;
