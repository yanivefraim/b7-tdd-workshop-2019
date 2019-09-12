import React, { useState } from 'react';
const Registration = ({ onNewGame }) => {
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');

  return (
    <div>
      <input
        className="p1-input"
        data-testid="p1-input"
        onChange={evt => setP1(evt.target.value)}
      ></input>
      <input
        className="p2-input"
        data-testid="p2-input"
        onChange={evt => setP2(evt.target.value)}
      ></input>
      <button
        onClick={() => {
          p1 && p2 && onNewGame(p1, p2);
        }}
        className="new-game"
        data-testid="new-game"
      >
        New Game
      </button>
    </div>
  );
};

export { Registration };
