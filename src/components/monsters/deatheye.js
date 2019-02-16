import React, { Component } from 'react';
import monster5 from '../../assets/monster5.png';
// Death Eye

class DeathEye extends Component {
    render() {
        return (
            <img src={monster5} style={{
                width: "30vmin",
                position: "absolute",
                marginLeft: this.props.x,
                marginTop: this.props.y,
                animation: "wobble",
                animationDuration: "0.01s",
                animationIterationCount: "infinite",
                animationDirection: "alternate"
            }}/>
        );
    }
}

export default DeathEye;