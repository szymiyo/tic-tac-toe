export default function GameOver({ winner, onRestart }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-bg-game-over animate-pop-in gap-6">
      <h2 className="text-6xl text-center text-yellow-400 m-0">Game Over!</h2>
      <p className="text-3xl text-center text-orange-200">
        {winner ? <>{winner} won!</> : <>It's a draw.</>}
      </p>
      <p className="text-3xl text-center text-orange-200">
        <button
          className="block text-2xl text-yellow-400 rounded cursor-pointer my-0 mx-auto bg-none border-2 border-rematch border-solid py-2 px-4 transition-colors shadow-rematch-button hover:bg-yellow-400 hover:text-yellow-900 hover:scale-110 hover:shadow-rematch-button-hover"
          onClick={onRestart}
        >
          Rematch!
        </button>
      </p>
    </div>
  );
}