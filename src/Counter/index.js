import React, {useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="main">
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={increment} disabled={counter >= 5 ? true : false}>
        +
      </button>
      <button onClick={decrement} disabled={counter <= 0 ? true : false}>
        -
      </button>
      <button onClick={handleReset} disabled={counter == 0 ? true : false}>
        ↻
      </button>
    </div>
  );
}
