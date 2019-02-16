import React, { Component } from 'react';
import monster1 from '../../assets/monster1.png';

// Soul Stealer

class SoulStealer extends Component {
    render() {
        return (
            <img src={monster1} style={{
                width: "40vmin",
                position: "absolute",
                marginLeft: this.props.x,
                marginTop: this.props.y,
                animation: "pulse",
                animationDuration: "0.7s",
                animationIterationCount: "infinite",
                animationDirection: "alternate"
            }}/>
        );
    }
}

export default SoulStealer;