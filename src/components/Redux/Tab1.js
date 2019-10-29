import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from './Action';

const players = [{ name: 'stefan' }, { name: 'Rade' }, { name: 'Zika' }];

class Tab1 extends Component {
  handleAddPlayer = value => {
    // addPlayer came from redux action
    this.props.addPlayer(value);
  };

  render() {
    return (
      <div>
        {players.map(player => (
          <button
            key={player.name}
            onClick={() => this.handleAddPlayer(player.name)}
          >
            {player.name}
          </button>
        ))}
      </div>
    );
  }
}
export default connect(
  // connect component with redux store
  null, // mapStateToProps
  { addPlayer }, // action
)(Tab1);
