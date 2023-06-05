import { useState } from "react";
import HomePage from "./pages/HomePage";


export default function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev =>  prev + 1);
  }

  return <div>
    {console.log("App rendered")}
    <h1>{count}</h1>
    <button onClick={handleClick}>+</button>
    <HomePage />

  </div>
}
