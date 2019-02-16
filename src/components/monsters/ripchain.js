import React, { Component } from 'react';
import monster3 from '../../assets/monster3.png';
// Rip Chain

class RipChain extends Component {
    render() {
        return (
            <img src={monster3} style={{
                width: "30vmin",
                position: "absolute",
                marginLeft: this.props.x,
                marginTop: this.props.y,
                animation: "bounce",
                transitionTimingFunction: "cubic-bezier(.5,0.05,1,.5)",
                animationDuration: "0.25s",
                animationIterationCount: "infinite",
                animationDirection: "alternate"
            }}/>
        );
    }
}

export default RipChain;