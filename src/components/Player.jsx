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
      className={`flex items-center w-6/12 border-2 border-solid rounded 
      ${
        isActive && symbol === "X" ? "border-cross animate-pulse" : 
        isActive && symbol === "O" ? "border-circle animate-pulse" : 
        "border-transparent"
      }`}
    >
      <span className="p-2 rounded font-bold border-2 border-transparent border-solid flex justify-center items-center">
        {editable && editable ? (
          <input
            className="text-base w-40 p-2 bg-gray-500 text-center uppercase border-none animate-pulse"
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          />
        ) : (
          <span
            className={`inline-block w-40 text-base uppercase m-0 p-2 rounded text-center 
            ${symbol === "X" ? "text-cross" : "text-circle"}`}
          >
            {playerName}
          </span>
        )}
        <span
          className={`ml-4 text-base 
          ${symbol === "X" ? "text-cross" : "text-circle"}
          `}
        >
          {symbol}
        </span>
      </span>
      <button
        className="w-12 text-triangle text-sm cursor-pointer text-center border-none bg-none transition-colors px-1 py-2"
        onClick={handleEditButton}
      >
        {editable ? "Save" : "Edit"}
      </button>
    </li>
  );
}
