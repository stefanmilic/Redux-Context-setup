import React, { Component } from 'react';
import PlayerContext from './Context';

const players = [{ name: 'stefan' }, { name: 'Rade' }, { name: 'Zika' }];

export default class Tab1 extends Component {
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
