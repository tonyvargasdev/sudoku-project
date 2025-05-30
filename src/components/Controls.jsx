const Controls = ({ onNewGame }) => {
  return (
    <div className="controls">
      <button onClick={() => onNewGame('easy')}>Easy</button>
      <button onClick={() => onNewGame('medium')}>Medium</button>
      <button onClick={() => onNewGame('hard')}>Hard</button>
    </div>
  );
};

export default Controls;