import React, { Component } from 'react';

import "./animations.css";

import SoulStealer from './soulstealer';
import SoulEater from './souldeater';
import RipChain from './ripchain';
import SwordStealer from './swordstealer';
import DeathEye from './deatheye';
import Chunky from './chunky';
import Smile from './smile';

class Monsters extends Component {
    constructor() {
        super();
        this.state = {};
    }

    moveMonster = () => {

    }
   

    render() {
        return (
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                overflow: "hidden"
            }}>
                <SoulStealer x="50vw" y="50vh"/>
                <SoulEater x="30vw"/>
                <RipChain y="50vh"/>
                <SwordStealer />
                <DeathEye x="70vw" />
                <Chunky x="35vw" y="30vh"/>
                <Smile x="70vw" y="70vh" />
            </div>
        );
    }
}

export default Monsters;

// 1 Soul Stealer - L
// 2 Soul Eater - L
// 3 Rip Chain - L
// 4 Sword Stealer - K
// 5 Death Eye - K
// 6 Chunky - K
// 7 Smile - K
