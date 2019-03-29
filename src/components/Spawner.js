import React, { Component } from 'react';
import utils from '../utils/utils';

import Monster from './Monster';

class Spawner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
  }

  newMonster() {
    if (this.props.restart) {
      this.setState({
        monsters: []
      })
    }
    if (!this.props.pause) {
      const newSet = this.state.monsters;

      newSet.push({
        x: utils.getRndInteger(-50, 50),
        y: utils.getRndInteger(-50, 50),
        key: new Date().getTime()
      })

      this.setState({
        monsters: newSet,
      })
    }
  }

  updateHealth = (ammount) => {
    this.props.updateHealth(ammount)
  }

  removeMonster = (key, scoreValue) => {
    const oldSet = this.state.monsters;
    const newSet = oldSet.filter((mob) => mob.key !== key);
    this.setState({
      monsters: newSet
    })
    this.props.updateScores(scoreValue);
  }

  componentDidMount() {
    this.spawner = setInterval(
      () => this.newMonster(),
      2500
    );
  }

  componentWillUnmount() {
    clearInterval(this.spawner);
  }

  render() {
    const allMobs = this.state.monsters.map((mob, index) =>
      <Monster key={mob.key} config={mob} delete={this.removeMonster} updateHealth={this.updateHealth} pause={this.props.pause} />
    );

    return (
      <React.Fragment>
        {allMobs}
      </React.Fragment>
    );
  }
}

export default Spawner;