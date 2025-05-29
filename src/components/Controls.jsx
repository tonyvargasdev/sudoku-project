const Controls = ({ onNewGame }) => {
  return (
    <div className="controls">
      <button onClick={() => onNewGame('easy')}>Fácil</button>
      <button onClick={() => onNewGame('medium')}>Medio</button>
      <button onClick={() => onNewGame('hard')}>Difícil</button>
    </div>
  );
};

export default Controls;