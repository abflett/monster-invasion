import React, { Component } from 'react';
import utils from '../utils/utils';

class Start extends Component {

  render() {
    return (
      <div className="start" style={{
        display: utils.display(this.props.display)
      }}>
        Start
      </div>
    );
  }
}

export default Start;