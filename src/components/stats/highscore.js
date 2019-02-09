import React, { Component } from 'react';


class HighScore extends Component {
  render() {
    return (
        <h2>
            High Score: {this.props.highscore}
        </h2>
    );
  }
}

export default HighScore;