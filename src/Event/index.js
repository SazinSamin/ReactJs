import React from "react";

// Learn more about event bubbling
// https://github.com/SazinSamin/Web-technology/tree/main/Paradigm

export default function Event_bubbling () {

  const handleClickParent = (event) => {
    alert("Click parent")
  } 

  const handleClickChild = () => {
    alert("Click child")
  }

  return <div>
    <h1>Welcome</h1>
    <div className="parentDiv" onClick={handleClickParent}>
      <button onClick={handleClickChild}>Click Here</button>
    </div>
  </div>
}