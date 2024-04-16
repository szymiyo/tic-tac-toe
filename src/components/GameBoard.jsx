export default function GameBoard({ onSelect, board }) {
  return (
    <ol className="flex flex-wrap justify-center gap-8 p-0 flex-col mx-0 my-12">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex flex-wrap justify-center gap-8 m-0 p-0">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className={`w-32 h-32 bg-gray-500 text-6xl cursor-pointer p-4 border-none 
                  ${playerSymbol === "X" ? "text-cross" : playerSymbol === "O" ? "text-circle" : ""}`}
                  onClick={() => onSelect(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
