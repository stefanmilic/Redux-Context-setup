import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from './Action';

const players = [{ name: 'Pera' }, { name: 'Mika' }, { name: 'Jova' }];

class Tab2 extends Component {
  handlePlayerAdd = value => {
    this.props.addPlayer(value);
  };

  render() {
    return (
      <div>
        {players.map(player => (
          <button
            key={player.name}
            onClick={() => this.handlePlayerAdd(player.name)}
          >
            {player.name}
          </button>
        ))}
      </div>
    );
  }
}

export default connect(
  null,
  { addPlayer },
)(Tab2);
