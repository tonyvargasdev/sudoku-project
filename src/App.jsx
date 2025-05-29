import { useState } from 'react';
import Board from './components/Board';
import Controls from './components/Controls';
import { generateBoard } from './utils/sudokuGenerator';
import './App.css';

function App() {
  const [board, setBoard] = useState(generateBoard('easy'));

  const handleNewGame = (difficulty) => {
    setBoard(generateBoard(difficulty));
  };

  return (
    <div className="app">
      <h1>Lulu Sudoku</h1>
      <Board board={board} setBoard={setBoard} />
      <Controls onNewGame={handleNewGame} />
    </div>
  );
}

export default App;