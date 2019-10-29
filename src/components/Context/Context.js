import React from 'react';

// create context
const PlayerContext = React.createContext([]);

// provider pass data
export class PlayerProvider extends React.Component {
  state = {
    players: [],
    setPlayer: value =>
      this.setState({ players: [...this.state.players, value] }),
  };
  render() {
    return (
      <PlayerContext.Provider value={this.state}>
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}
// consumer use that data
export const PlayerConsumer = PlayerContext.Consumer;

export default PlayerContext;
