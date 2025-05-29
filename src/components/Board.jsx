import Cell from './Cell';
import { isValidMove } from '../utils/validator';

const Board = ({ board, setBoard }) => {
  const handleCellChange = (row, col, value) => {
    if (value >= 0 && value <= 9) {
      const newBoard = [...board];
      newBoard[row][col] = value === 0 ? 0 : value; // Permite borrar (0)
      setBoard(newBoard);
    }
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
              isInitial={board[rowIndex][colIndex] !== 0}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;