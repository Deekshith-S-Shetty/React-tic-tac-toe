import Square from "./Square";
import "./Board.css";

function calculateWinner(square) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    let [a, b, c] = winningLines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}

export default function Board({ isX, square, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(square) || square[i]) return;

    let nextSquares = square.slice();
    nextSquares[i] = isX ? "X" : "O";

    onPlay(nextSquares);
  }

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Current Player: " + (isX ? "X" : "O");
  }

  return (
    <>
      <h1 className="status">{status}</h1>
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
