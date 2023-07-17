import "./Square.css";

export default function Square({ value, setValue }) {
  return (
    <>
      <button className="square" onClick={setValue}>
        {value}
      </button>
    </>
  );
}
