import React, { Component } from 'react';
import Stats from '../src/components/stats/stats';
import Monsters from './components/monsters/monsters';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      highScore: 0,
      health: 88,
      gameover: false,
      newgame: false,
      mPos: {
        x: 0,
        y: 0
      }
    };
  }

  updateScore = (points) => {
    let updatedScore = points + this.state.score;
    if (updatedScore > this.state.highScore){
      this.setState({highScore: updatedScore});
    }
    this.setState({score: updatedScore});
  }

  moveMouse = (e) => {
    this.setState({ 
      mPos: {
        x: e.clientX,
        y: e.clientY
      }
    });
    this.updateScore(10);
  }


  componentDidMount() {
    document.addEventListener('mousemove', this.moveMouse);
  }

  componentWillUnmount() {
    //clearInterval(this.intervalId);
  }

  render() {
    return (
      <React.Fragment>
        <Monsters />
        <Stats
          score={this.state.score}
          health={this.state.health}
          highscore={this.state.highScore} />
        
      </React.Fragment>
    );
  }
}

export default App;
