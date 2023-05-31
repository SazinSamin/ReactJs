import { useState } from "react";
import Component2 from "./Component2";

const Component1 = () => {

  const [userName, setUserName] = useState("Poltu");

  return <div>
    <Component2 userName={userName}/>
  </div>
}


export default Component1;