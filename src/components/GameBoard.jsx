export default function GameBoard({ onSelect, board }) {
  return (
    <ol className="flex flex-wrap justify-center gap-2 sm:gap-8 p-0 flex-col mx-0 my-6 sm:my-12">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex flex-wrap justify-center gap-2 sm:gap-8 m-0 p-0">
            {row.map((playerSymbol, colIndex) => (
              <li className="flex justify-center items-center" key={colIndex}>
                <button
                  className={`w-20 h-20 sm:w-32 sm:h-32 bg-gray-500 text-6xl cursor-pointer p-0 sm:p-4 border-none 
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
