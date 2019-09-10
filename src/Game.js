import React from 'react';
export const Game = ({ p1, p2, board, onCellClicked }) => {
  return (
    <div>
      <h2 data-testid="player1-title">{p1}</h2>
      <h2 data-testid="player2-title">{p2}</h2>
      <table>
        <tbody>
          {board.map((raw, rawIndex) => (
            <tr key={rawIndex}>
              {raw.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  onClick={() => onCellClicked(rawIndex, cellIndex)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
