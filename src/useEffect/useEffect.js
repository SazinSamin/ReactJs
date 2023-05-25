import React, { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  // this useEffect only work when we increse the count1 value and
  // the UI will re-render.
  // incresing counter2 won't effect becasue it doesn't bind with the
  // useEffect
  useEffect(() => {
    console.log("UseEffect...");
  }, [count1]);
  // To work useEffect every time we can omit the second parameter in useEffect
  // remove the emepty array
  // The second parameter of useEffect the arary, if we keep it empty it will
  // just render first time and do noting after that.

  return (
    <div>
      <h1>UseEffectExample</h1>
      <p>{console.log("Rendering...")}</p>
      <div>
        <p>{count1}</p>
        <button onClick={increment1}>+</button>
      </div>
      <div>
        <p>{count2}</p>
        <button onClick={increment2}>+</button>
      </div>
    </div>
  );
}
