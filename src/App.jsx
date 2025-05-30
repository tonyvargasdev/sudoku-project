import { useEffect, useState } from 'react';
import Board from './components/Board';
import Controls from './components/Controls';
import { generateBoard } from './utils/sudokuGenerator';
import './App.css';

function App() {
  const [board, setBoard] = useState([]);
  const [solution, setSolution] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [lives, setLives] = useState(3);
  const [selectedNumber, setSelectedNumber] = useState(null); // 🆕 Número seleccionado

  const handleNewGame = (difficulty) => {
    const { puzzle, solution } = generateBoard(difficulty);
    setBoard(puzzle);
    setSolution(solution);
    setGameStatus('playing');
    setLives(3);
  };

  // Ejecutar al cargar por primera vez
  useEffect(() => {
    handleNewGame('easy');
  }, []);

  return (
    <div className="app">
      <h1>Lulu Sudoku</h1>
      <h2>Vidas: {lives}</h2>
      {gameStatus === 'won' && <div className="win-message">¡Ganaste! 🎉</div>}
      <Board
        board={board}
        setBoard={setBoard}
        solution={solution}
        lives={lives}
        setLives={setLives}
        setGameStatus={setGameStatus}
        selectedNumber={selectedNumber} 
        setSelectedNumber={setSelectedNumber} 
        onLose={() => handleNewGame('easy')}
      />
      <Controls onNewGame={handleNewGame} />
    </div>
  );
}

export default App;
