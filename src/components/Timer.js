import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <div className="timer">
        Time: {this.props.time}
      </div>
    );
  }
}

export default Timer;