import gameStatus from './gameLogic.js';

test('"X" should win the game for top row', () => {
  // eslint-disable-next-line
  const board = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});
