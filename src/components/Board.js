import { useState } from "react";
import Square from "./Square";
import "./Board.css";

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClick(i) {
    let nextSquares = square.slice();
    nextSquares[i] = "X";
    setSquare(nextSquares);
  }
  return (
    <>
      <div className="board">
        <div className="board-row">
          <Square value={square[0]} setValue={() => handleClick(0)} />
          <Square value={square[1]} setValue={() => handleClick(1)} />
          <Square value={square[2]} setValue={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={square[3]} setValue={() => handleClick(3)} />
          <Square value={square[4]} setValue={() => handleClick(4)} />
          <Square value={square[5]} setValue={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={square[6]} setValue={() => handleClick(6)} />
          <Square value={square[7]} setValue={() => handleClick(7)} />
          <Square value={square[8]} setValue={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
