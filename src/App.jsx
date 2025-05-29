import { useState } from 'react';
import Board from './components/Board';
import Controls from './components/Controls';
import { generateBoard } from './utils/sudokuGenerator';
import './App.css';

function App() {
  const [board, setBoard] = useState(generateBoard('easy'));
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'

  const handleNewGame = (difficulty) => {
    setBoard(generateBoard(difficulty));
    setGameStatus('playing');
  };

  return (
    <div className="app">
      <h1>Lulu Sudoku</h1>
      {gameStatus === 'won' && <div className="win-message">¡Ganaste! 🎉</div>}
      <Board board={board} setBoard={setBoard} setGameStatus={setGameStatus} />
      <Controls onNewGame={handleNewGame} />
    </div>
  );
}

export default App;