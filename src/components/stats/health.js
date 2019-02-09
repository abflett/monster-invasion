import React, { Component } from 'react';


class Health extends Component {
  render() {
    return (
        <div style={{
            border: "solid 0.4vmin",
            borderRadius: "2vmin",
            width: "100%",
            height: "5vmin"
        }}>
            <div style={{
                backgroundColor: "red",
                width: this.props.health + "%",
                height: "100%",
                borderRadius: "1.6vmin"
            }}>
            </div>
        </div>
    );
  }
}

export default Health;