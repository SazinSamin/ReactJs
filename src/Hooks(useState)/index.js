import React, { useState } from "react"

// using useState Hooks we can change the state of functional component
// like in class component
export default function Counter () {

  // first one is currentstate, next the a function to change the state
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return <div>
    <h1>Simple Counter</h1>
    <p>{count}</p>
    <button onClick={handleIncrement}>+</button>
  </div>
}