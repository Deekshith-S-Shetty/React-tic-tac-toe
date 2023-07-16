import Square from "./Square";
import "./Board.css";

export default function Board() {
  return (
    <>
      <div className="board">
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}
