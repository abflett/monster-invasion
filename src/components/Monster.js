import React, { Component } from 'react';
import moveMonster from '../utils/moveMonster';
import utils from '../utils/utils';


class Monster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: {
        x: this.props.config.x,
        y: this.props.config.y
      },
      speed: .05,
      radius: 10,
      damage: -10,
      alive: true,
      scoreValue: 5
    }
  }

  handleDelete = () => {
    this.setState({
      alive: false
    });
    this.props.delete(this.props.config.key, this.state.scoreValue)
  }

  attack = () => {
    this.props.updateHealth(this.state.damage);
  }

  loop = () => {
    if (!this.props.pause) {
      let newPos = {}
      if (utils.withinRadius(this.state.pos, this.state.radius)) {
        newPos = moveMonster(this.state.pos, this.state.speed);
        this.setState({
          pos: newPos
        })
        this._loopId = window.requestAnimationFrame(this.loop)
      } else {
        this.attack();
      }
    }
  }

  componentDidMount() {
    this._loopId = window.requestAnimationFrame(this.loop)
  }

  componentWillUnmount() {
    console.log(this._loopId)
    window.cancelAnimationFrame(this._loopId);
  }

  render() {
    return (
      <div className="monster" onClick={this.handleDelete} style={{
        marginLeft: this.state.pos.x + "vw",
        marginTop: this.state.pos.y + "vh"
      }}>
      </div>
    );
  }
}

export default Monster;