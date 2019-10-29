import React, { Component } from 'react';
import PlayerContext from './Context';

export default class Tab3 extends Component {
  // https://reactjs.org/docs/context.html
  // initialize contextType
  static contextType = PlayerContext;
  render() {
    // use context value which we pass by Provider
    const { players } = this.context;

    if (players.length === 0) {
      return <div>No players in the list!</div>;
    }

    return (
      <div>
        {players.map((player, index) => (
          <div key={index}>{player}</div>
        ))}
      </div>
    );
  }
}
