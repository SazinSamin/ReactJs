import { useCallback, useState } from "react";
import HomePage from "./pages/HomePage";


export default function App() {

  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setCount(prev =>  prev + 1);
  }

  // useCallback function for skipping re-render when memoized function 
  // has callback function
  // As js always return new function

  // useCallback recieve two arguments(a fn & dependency states)
  const handleCountChangeFromChidlren = useCallback(() => {
    setCount(prev =>  prev + 1);
  }, [count]);
  // here the second parameter recieve states(here count) which change
  // also bring change in function, otherwise not.

  return <div>
    <h2>{toggle ? "true" : "false"}</h2>
    <button onClick={() => {
      setToggle(!toggle);
    }}>Toggle</button>
    {console.log("App rendered")}
    <h1>{count}</h1>
    <button onClick={handleClick}>+</button>
    <HomePage handleIncrement={handleCountChangeFromChidlren}/>

  </div>
}
