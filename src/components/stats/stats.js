import React, { Component } from 'react';
import Score from './score';
import HighScore from './highscore';
import Health from "./health";


class Stats extends Component {
  render() {
    return (
      <div style={{
        width: "80%"
      }}>
        <Score score={this.props.score} />
        <HighScore score={this.props.highscore} />
        <Health health={this.props.health} />
      </div>
    );
  }
}

export default Stats;