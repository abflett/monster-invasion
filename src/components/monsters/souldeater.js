import React, { Component } from 'react';
import monster2 from '../../assets/monster2.png';
// Soul Eater

class SoulEater extends Component {
    render() {
        return (
            <img src={monster2} style={{
                width: "30vmin",
                position: "absolute",
                marginLeft: this.props.x,
                marginTop: this.props.y,
                animation: "pulse",
                transitionTimingFunction: "cubic-bezier(.5,0.05,1,.5)",
                animationDuration: "0.1s",
                animationIterationCount: "infinite",
                animationDirection: "alternate"
            }}/>
        );
    }
}

export default SoulEater;