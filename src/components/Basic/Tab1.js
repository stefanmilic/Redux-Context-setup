import React from 'react';

const players = [{ name: 'stefan' }, { name: 'Rade' }, { name: 'Zika' }];

const Tab1 = () => {
  const { onClick } = this.props;
  return (
    <div>
      {players.map(player => (
        <button key={player.name} onClick={() => onClick(player.name)}>
          {player.name}
        </button>
      ))}
    </div>
  );
};
export default Tab1;
