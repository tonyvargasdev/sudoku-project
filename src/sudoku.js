// Verifica si un número se puede colocar en (row, col)
export function isValid(board, row, col, num) {
  // Revisa la fila
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;
  }

  // Revisa la columna
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) return false;
  }

  // Revisa la caja 3x3
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) return false;
    }
  }

  return true;
}
export function solveSudoku(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === "") {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, String(num))) {
            board[row][col] = String(num);

            if (solveSudoku(board)) return true;
            board[row][col] = ""; // backtrack
          }
        }
        return false; // no valid number found
      }
    }
  }
  return true; // resolved
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function generateFullBoard() {
  const board = Array.from({ length: 9 }, () => Array(9).fill(""));

  function fill() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === "") {
          const nums = shuffle(["1","2","3","4","5","6","7","8","9"]);
          for (let num of nums) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
              if (fill()) return true;
              board[row][col] = "";
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  fill();
  return board;
}
export function removeCells(board, emptyCount = 40) {
  const puzzle = board.map(row => [...row]);

  let removed = 0;
  while (removed < emptyCount) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (puzzle[row][col] !== "") {
      puzzle[row][col] = "";
      removed++;
    }
  }

  return puzzle;
}

export function generatePuzzle() {
  const full = generateFullBoard();
  return removeCells(full);
}