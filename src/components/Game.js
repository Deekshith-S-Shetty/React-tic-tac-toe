import { useState } from "react";
import Board from "./Board";
import "./Game.css";

export default function Game() {
  const [history, setHistory] = new useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  let isX = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = "Go to move :" + move;
    } else {
      description = "Go to Game Start.";
    }

    return (
      <li key={move}>
        <button className="moves" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board isX={isX} square={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-moves">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}
