import { useState, useEffect } from "react";

import { validInput, inValidInput } from "../Dynamic_styling/index.css";


const DynamicStyling = () => {
  const [inputData, setInputData] = useState("");
  const [validInput, setValidInput] = useState(false);

  const handleOnchange = (event) => {
    setInputData(event.target.value);
  };

  useEffect(() => {
    inputData.length < 3 ? setValidInput(false) : setValidInput(true);
  });

  return (
    <div>
      <h1>Dynamic Styling</h1>
      <input
        className={`${validInput ? "validInput" : "inValidInput"}`}
        type="text"
        onChange={handleOnchange}
      ></input>
    </div>
  );
};

export default DynamicStyling;
