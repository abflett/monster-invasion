import React, { Component } from 'react';
import monster6 from '../../assets/monster6.png';
// Chunky

class Chunky extends Component {
    render() {
        return (
            <img src={monster6} style={{
                width: "25vmin",
                position: "absolute",
                marginLeft: this.props.x,
                marginTop: this.props.y,
                animation: "wobble",
                animationDuration: "0.8s",
                animationIterationCount: "infinite",
                animationDirection: "alternate"
            }}/>
        );
    }
}

export default Chunky;