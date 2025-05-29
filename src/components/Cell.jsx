const Cell = ({ value, onChange, isInitial }) => {
  return (
    <input
      type="number"
      min="1"
      max="9"
      value={value || ''}
      onChange={(e) => onChange(parseInt(e.target.value) || 0)}
      className={`cell ${isInitial ? 'initial' : ''}`}
      disabled={isInitial}
    />
  );
};

export default Cell;