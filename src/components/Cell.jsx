const Cell = ({ value, onChange, isInitial }) => {
  const handleChange = (e) => {
    const input = e.target.value;
    
    // Permitir:
    // 1. Vacío (para borrar, envía 0 al padre)
    // 2. Números del 1 al 9 (envía el número)
    if (input === '' || (/^[1-9]$/.test(input))) {
      onChange(input === '' ? 0 : parseInt(input, 10));
    }
  };

  const handleKeyDown = (e) => {
    // Permitir borrar con Backspace o Delete incluso si hay un número
    if (e.key === 'Backspace' || e.key === 'Delete') {
      onChange(0); // Envía 0 para borrar
    }
  };

  return (
    <input
      type="text"
      value={value !== 0 ? value : ''} // Muestra vacío si el valor es 0
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className={`cell ${isInitial ? 'initial' : ''}`}
      disabled={isInitial}
      maxLength="1"
      inputMode="numeric" // Teclado numérico en móviles
    />
  );
};

export default Cell;