import Cell from './Cell';

const Board = ({ board, setBoard, solution, lives, setLives, setGameStatus, onLose }) => {
  const handleCellChange = (row, col, value) => {
    if (board[row][col].isInitial) return;

    const correctValue = solution[row][col];
    const isCorrect = value === correctValue;

    const newBoard = board.map((r, i) =>
      r.map((cell, j) =>
        i === row && j === col
          ? {
              ...cell,
              value,
              isIncorrect: !isCorrect && value !== 0, // marca en rojo si está mal
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

    // Si el valor es correcto, revisamos si ya ganó
    if (isCorrect) {
      const hasWon = newBoard.every(row =>
        row.every(cell => cell.value !== 0 && !cell.isIncorrect)
      );
      if (hasWon) {
        setGameStatus('won');
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
              isIncorrect={cell.isIncorrect}
              onChange={(value) => handleCellChange(rowIndex, colIndex, value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
