import React, { Component } from 'react';

export default class Tab3 extends Component {
  render() {
    const { listOfPlayers } = this.props;

    if (listOfPlayers.length === 0) {
      return <div>No players in the list!</div>;
    }

    return (
      <div>
        {listOfPlayers.map((player, index) => (
          <div key={index}>{player}</div>
        ))}
      </div>
    );
  }
}
