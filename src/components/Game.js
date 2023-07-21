import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [isX, setIsX] = new useState(true);
  const [history, setHistory] = new useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setIsX(!isX);
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board isX={isX} square={currentSquares} onPlay={handlePlay} />
        </div>
      </div>
    </>
  );
}
