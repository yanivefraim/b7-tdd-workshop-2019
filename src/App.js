import React, { useState } from 'react';
import './App.css';
import cloneDeep from 'lodash/cloneDeep';
import { Registration } from './Registration';
import { Game } from './Game';
import gameStatus from './gameLogic.js';

const App = () => {
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [winner, setWinner] = useState('');

  const handleNewGame = (p1, p2) => {
    setP1(p1);
    setP2(p2);
  };
  const handleCellClick = (rowIndex, cellIndex) => {
    const boardCopy = cloneDeep(board);
    boardCopy[rowIndex][cellIndex] = 'X';
    if (gameStatus(boardCopy) === 'X') {
      setWinner('X');
    }
    setBoard(boardCopy);
  };

  return (
    <div className="App">
      <Registration onNewGame={handleNewGame}></Registration>
      <Game board={board} onCellClick={handleCellClick} p1={p1} p2={p2}></Game>
      {winner && (
        <div data-testid="winner" className="winner">{`${p1} won!!!`}</div>
      )}
    </div>
  );
};

export default App;
