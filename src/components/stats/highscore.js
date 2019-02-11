import React, { Component } from 'react';


class HighScore extends Component {
  render() {
    return (
        <h2 style={{
          margin: "2vmin",
          userSelect: "none"
        }}>
            Highest Score: {this.props.highscore}
        </h2>
    );
  }
}

export default HighScore;