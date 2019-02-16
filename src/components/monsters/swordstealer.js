import React, { Component } from 'react';
import monster4 from '../../assets/monster4.png';
// Sword Stealer

class SwordStealer extends Component {
    render() {
        return (
            <img src={monster4} style={{
                width: "30vmin",
                position: "absolute",
                marginLeft: this.props.x,
                marginTop: this.props.y,
                animation: "wobble",
                transitionTimingFunction: "cubic-bezier(.5,0.05,1,.5)",
                animationDuration: "1s",
                animationIterationCount: "infinite",
                animationDirection: "alternate"
            }}/>
        );
    }
}

export default SwordStealer;