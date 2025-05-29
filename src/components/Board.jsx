import Cell from './Cell';

const Board = ({ board, setBoard, solution, lives, setLives, setGameStatus, onLose }) => {
  const handleCellChange = (row, col, value) => {
    if (board[row][col].isInitial) return;

    const newBoard = board.map((r, i) =>
      r.map((cell, j) =>
        i === row && j === col
          ? { ...cell, value }
          : cell
      )
    );

    if (value === 0) {
      setBoard(newBoard);
      return;
    }

    // Verifica si es correcto
    if (value === solution[row][col]) {
      setBoard(newBoard);
      // Verifica si ganó
      const hasWon = newBoard.every(row =>
        row.every(cell => cell.value !== 0)
      );
      if (hasWon) {
        setGameStatus('won');
      }
    } else {
      // Error: pierde una vida
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) {
        alert('¡Perdiste! 😢 El juego se reiniciará.');
        onLose();
      }
    }
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell.value}
              isInitial={cell.isInitial}
              onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
