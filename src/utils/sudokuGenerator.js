// Generador simplificado (para empezar)
export const generateBoard = (difficulty = 'easy') => {
  // Tablero de ejemplo (fácil)
  const easyBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

    // Convertir el tablero a objetos con metadata
  const boardWithMetadata = easyBoard.map(row =>
    row.map(cellValue => ({
      value: cellValue,
      isInitial: cellValue !== 0 // true si no es cero
    }))
  );

  return boardWithMetadata;
};