import React from "react";

const SudokuBoard = ({ board, onChange }) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(9, 40px)",
      gap: "2px",
      justifyContent: "center",
      margin: "20px auto"
    }}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isEditable = cell === "";
          return (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              maxLength="1"
              value={cell}
              onChange={(e) => {
                const val = e.target.value;
                if (/^[1-9]?$/.test(val)) {
                  onChange(rowIndex, colIndex, val);
                }
              }}
              style={{
                width: "40px",
                height: "40px",
                textAlign: "center",
                fontSize: "20px",
                backgroundColor: isEditable ? "#fff" : "#eee",
                border: "1px solid #999"
              }}
              readOnly={!isEditable}
            />
          );
        })
      )}
    </div>
  );
};

export default SudokuBoard;

