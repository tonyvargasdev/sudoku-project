const Cell = ({ value, isInitial, isIncorrect, onChange }) => {
  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 1 || val > 9) {
      onChange(0); // Borra si no es válido
    } else {
      onChange(val);
    }
  };

  return (
    <input
      className={`cell ${isInitial ? 'initial' : ''} ${isIncorrect ? 'incorrect' : ''}`}
      type="text"
      value={value === 0 ? '' : value}
      disabled={isInitial}
      onChange={handleInputChange}
      maxLength={1}
    />
  );
};

export default Cell;
