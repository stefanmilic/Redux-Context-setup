import React from 'react';

const players = [{ name: 'Pera' }, { name: 'Mika' }, { name: 'Jova' }];

const Tab2 = () => {
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

export default Tab2;
