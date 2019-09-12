const gameStatus = board => {
  if (board[0].every(cell => cell === 'X')) {
    return 'X';
  }
};

export default gameStatus;
