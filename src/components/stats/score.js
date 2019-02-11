import React, { Component } from 'react';


class Score extends Component {
  render() {
    return (
        <h2 style={{
          margin: "2vmin",
          userSelect: "none"
        }}>
            Score: {this.props.score}
        </h2>
    );
  }
}

export default Score;