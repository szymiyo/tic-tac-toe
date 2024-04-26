import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [editable, setEditable] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditButton() {
    setEditable((editable) => !editable);
    if (editable) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li
      className={`flex items-center justify-around sm:justify-evenly w-5/12 border-2 border-solid rounded 
      ${
        isActive && symbol === "X" ? "border-cross animate-pulse" : 
        isActive && symbol === "O" ? "border-circle animate-pulse" : 
        "border-transparent"
      }`}
    >
      <span className="p-1 sm:p-2 rounded font-bold border-2 border-transparent border-solid flex justify-center items-center">
        {editable && editable ? (
          <input
            className="text-xs sm:text-base w-[4rem] sm:w-28 p-1 sm:p-2 ml-0 bg-gray-500 text-center uppercase border-none animate-pulse"
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          />
        ) : (
          <span
            className={`inline-block text-xs sm:text-base uppercase p-1 sm:p-2 rounded text-center 
            ${symbol === "X" ? "text-cross" : "text-circle"}`}
          >
            {playerName}
          </span>
        )}
      </span>
      <span
          className={`m-0 text-xs sm:text-base 
          ${symbol === "X" ? "text-cross" : "text-circle"}
          `}
        >
          {symbol}
        </span>
      <button
        className="w-12 text-triangle text-xs sm:text-sm cursor-pointer text-center border-none bg-none transition-colors px-0 sm:px-1 py-2 ml-0"
        onClick={handleEditButton}
      >
        {editable ? "Save" : "Edit"}
      </button>
    </li>
  );
}
