import React, { Component } from 'react';
import monster7 from '../../assets/monster7.png';
// Smile

class Smile extends Component {
    render() {
        return (
            <img src={monster7} style={{
                width: "30vmin",
                position: "absolute",
                marginLeft: this.props.x,
                marginTop: this.props.y,
                animation: "bounce",
                transitionTimingFunction: "cubic-bezier(.5,0.05,1,.5)",
                animationDuration: "0.5s",
                animationIterationCount: "infinite",
                animationDirection: "alternate"
            }}/>
        );
    }
}

export default Smile;