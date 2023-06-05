import { useMemo } from "react";
import { useState } from "react"


export default function App() {

  const [count, setCount] = useState(0);


  // cache the result of expensive calculation, 
  // The calculation only trigger in initial rendering
  // and React will cache the value
  // So until dependencies isn't change React will return the cache value
  const result = useMemo(() => {
    let sum = 0;
    for(let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  }, []);


  return <div>
    <h1>useMemo Example</h1>
    <h2>Result: {result}</h2>
    <h2>{count}</h2>
    <button onClick={() => {
      setCount(prev => prev + 1);
    }}>+</button>
  </div>
}
