import React, { Component } from 'react';


class Score extends Component {
  render() {
    return (
        <h2>
            Score: {this.props.score}
        </h2>
    );
  }
}

export default Score;