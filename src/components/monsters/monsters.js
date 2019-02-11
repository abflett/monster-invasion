import React, { Component } from 'react';
import monster1 from '../../assets/monster1.png';
import monster2 from '../../assets/monster2.png';
import monster3 from '../../assets/monster3.png';
import monster4 from '../../assets/monster4.png';
import monster5 from '../../assets/monster5.png';
import monster6 from '../../assets/monster6.png';
import monster7 from '../../assets/monster7.png';

class Monsters extends Component {
    constructor() {
        super();
        this.state = {};
    }
   

    render() {
        return (
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                overflow: "hidden"
            }}>
            <img src={monster1} style={{
                width: "30vmin"
            }}/>
            </div>
        );
    }
}

export default Monsters;