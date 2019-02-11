import React, { Component } from 'react';
import Score from './score';
import HighScore from './highscore';
import Health from "./health";


class Stats extends Component {
  render() {
    return (
      <div style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Score score={this.props.score} />
          <HighScore highscore={this.props.highscore} />
        </div>
        <Health health={this.props.health} />
      </div>
    );
  }
}

export default Stats;