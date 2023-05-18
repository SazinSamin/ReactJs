import React, { useState } from "react"


export default function Counter () {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // get the preivous state to count the current state
    setCount((prevCount) => prevCount + 3);
  }

  return <div>
    <h1>Simple Counter</h1>
    <p>{count}</p>
    <button onClick={handleIncrement}>+</button>
  </div>
}