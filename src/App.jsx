import { useEffect, useState } from "react";
import { generatePuzzle, solveSudoku } from "./sudoku";
import SudokuBoard from "./components/SudokuBoard";

function App() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const newGame = generatePuzzle();
    setBoard(newGame);
  }, []);

  const handleChange = (row, col, value) => {
    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = value;
    setBoard(newBoard);
  };

  const handleSolve = () => {
    const solved = board.map(r => [...r]);
    solveSudoku(solved);
    setBoard(solved);
  };

  const handleNewGame = () => {
    const newGame = generatePuzzle();
    setBoard(newGame);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sudoku 🧩</h1>
      {board.length > 0 && (
        <SudokuBoard board={board} onChange={handleChange} />
      )}
      <button onClick={handleSolve}>Resolver</button>
      <button onClick={handleNewGame}>Nuevo juego</button>
    </div>
  );
}

export default App;
