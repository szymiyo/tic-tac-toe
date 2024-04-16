export default function Log({ turns }) {
  return (
    <ol className="text-square p-0 text-center my-8 mx-0 list-none overflow-hidden h-28">
      {turns.map((turn) => (
        <li
          key={`${turn.square.row}${turn.square.col}`}
          className="rounded m-3 "
        >
          {turn.player} selected ({turn.square.row},{turn.square.col})
      </li>
      ))}
    </ol>
  );
}