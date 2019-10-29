import React, { Component } from 'react';
import PlayerContext from './Context';

const players = [{ name: 'Pera' }, { name: 'Mika' }, { name: 'Jova' }];

export default class Tab2 extends Component {
  static contextType = PlayerContext;

  render() {
    const { setPlayer } = this.context;

    return (
      <div>
        {players.map(player => (
          <button key={player.name} onClick={() => setPlayer(player.name)}>
            {player.name}
          </button>
        ))}
      </div>
    );
  }
}
