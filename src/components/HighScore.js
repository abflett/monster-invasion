import React, { Component } from 'react';

class HighScore extends Component {
  render() {
    return (
      <div className="highscore">
        High Score: {this.props.highscore}
      </div>
    );
  }
}

export default HighScore;