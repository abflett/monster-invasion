import React, { Component } from 'react';

class Health extends Component {
  render() {
    return (
      <div className="health">
        Health: {this.props.health}
      </div>
    );
  }
}

export default Health;