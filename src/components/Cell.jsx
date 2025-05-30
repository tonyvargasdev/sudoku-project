const Cell = ({ value, isInitial, isIncorrect, isCorrect, onChange, onClick, isHighlighted }) => {
  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (isInitial || isCorrect) return; // Evita cambios en celdas bloqueadas

    if (isNaN(val) || val < 1 || val > 9) {
      onChange(0);
    } else {
      onChange(val);
    }
  };

  return (
    <input
      className={`cell ${isInitial ? 'initial' : ''} ${isIncorrect ? 'incorrect' : ''} ${isHighlighted ? 'highlighted' : ''}`}
      type="text"
      value={value === 0 ? '' : value}
      disabled={isInitial || isCorrect}
      onChange={handleInputChange}
      onClick={onClick}
      maxLength={1}
    />
  );
};

export default Cell;
