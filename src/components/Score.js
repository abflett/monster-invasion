import React, { Component } from 'react';

class Score extends Component {
  render() {
    return (
      <div className="score">
        Score: {this.props.score}
      </div>
    );
  }
}

export default Score;