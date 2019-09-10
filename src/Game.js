import React from 'react';
export const Game = ({ p1, p2 }) => {
  return (
    <div>
      <h2 data-testid="player1-title">{p1}</h2>
      <h2 data-testid="player2-title">{p2}</h2>
    </div>
  );
};
