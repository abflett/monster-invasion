import React, { Component } from 'react';

import Start from './components/Start';
import End from './components/End';
import Health from './components/Health';
import Score from './components/Score';
import HighScore from './components/HighScore';
import Crystal from './components/Crystal';
import Spawner from './components/Spawner';
import Timer from './components/Timer';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      start: false,
      end: false,
      pause: false,
      restart: false,
      health: 100,
      attackPower: 1, // how strong your attacks are
      score: 0,
      highScore: 0,
      time: 0,
    };
  }
  
  /*
    Game States

    Start Screen - NewGame, (Restart), Options, Quit
    Play Game - (Game logic), Menu, (Pause)
    Menu - (Pause), Options, Restart, Quit to title
  */

  restartGame = () => {
    this.setState({
      start: false,
      end: false,
      pause: false,
      restart: false,
      health: 100,
      score: 0,
      time: 0
    });
  }

  togglePause = () => {
    if (!this.state.pause) {
      this.setState({
        pause: true
      })
    } else {
      this.setState({
        pause: false
      })
    }
  }

  updateHealth = (ammount) => {
    if (!this.state.pause) {
      this.setState({
        health: this.state.health + ammount
      })
      if (this.state.health <= 0) {
        this.gameOver();
      }
    }
  }

  updateScores = (ammount) => {
    const score = this.state.score;
    let newScore = score + ammount,
      highScore = this.state.highScore;

    if (newScore > highScore) {
      highScore = newScore;
    }
    this.setState({
      score: newScore,
      highScore: highScore
    })
  }

  updateTime() {
    if (!this.state.pause) {
      this.setState({
        time: (this.state.time + 1)
      });
    }
  }

  gameOver = () => {
    this.setState({
      end: true,
      restart: true
    });
    this.togglePause();
  }

  // Game first starts
  componentDidMount() {
    this.timer = setInterval(
      () => this.updateTime(),
      1000
    );
  }

  // Cleanup
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <React.Fragment>
        <Start display={this.state.start} />
        <End display={this.state.end} reset={this.restartGame} />
        <Health health={this.state.health} />
        <Timer time={this.state.time} />
        <Score score={this.state.score} />
        <HighScore highscore={this.state.highScore} onClick={this.gameOver} />
        <Crystal />
        <Spawner updateHealth={this.updateHealth} updateScores={this.updateScores} pause={this.state.pause} restart={this.state.restart} />
        <div className="btns">
          <button onClick={this.restartGame} >restartGame</button>
          <button onClick={this.gameOver} >gameOver</button>
          <button onClick={this.togglePause} >togglePause</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Game;
