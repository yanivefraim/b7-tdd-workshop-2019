import React from 'react';
const Game = ({ p1, p2, board, onCellClick }) => (
  <div>
    <h3 className="p1-title">{p1}</h3>
    <h3 className="p2-title">{p2}</h3>
    <table>
      <tbody>
        {board.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                onClick={() => onCellClick(rowIndex, cellIndex)}
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

export { Game };
