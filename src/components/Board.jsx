import { useState } from 'react';
import Cell from './Cell';

const Board = ({ board, setBoard, solution, lives, setLives, setGameStatus, onLose }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleCellChange = (row, col, value) => {
    if (board[row][col].isInitial || board[row][col].isCorrect) return;

    const correctValue = solution[row][col];
    const isCorrect = value === correctValue;

    const newBoard = board.map((r, i) =>
      r.map((cell, j) =>
        i === row && j === col
          ? {
              ...cell,
              value,
              isIncorrect: !isCorrect && value !== 0,
              isCorrect: isCorrect && !cell.isInitial,
            }
          : cell
      )
    );

    setBoard(newBoard);

    if (!isCorrect && value !== 0) {
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) {
        alert('¡Perdiste! 😢 El juego se reiniciará.');
        onLose();
      }
    }

    if (isCorrect) {
      const hasWon = newBoard.every(row =>
        row.every(cell => cell.value !== 0 && !cell.isIncorrect)
      );
      if (hasWon) {
        setGameStatus('won');
      }
    }
  };

  const handleCellClick = (row, col) => {
    const cell = board[row][col];
    if (cell.isInitial || cell.isCorrect) {
      setSelectedValue(cell.value);
    } else {
      setSelectedValue(null);
    }
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => {
            const isHighlighted =
              selectedValue !== null &&
              cell.value === selectedValue &&
              cell.value !== 0;

            return (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                value={cell.value}
                isInitial={cell.isInitial}
                isIncorrect={cell.isIncorrect}
                isCorrect={cell.isCorrect}
                isHighlighted={isHighlighted}
                onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
