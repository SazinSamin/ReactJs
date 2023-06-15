import { useState } from "react";

const withCounter = (OriginalComponent) => {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);

    const increseCount = () => {
      setCounter(prev => {
        return prev + 1
      });
    };

    return <OriginalComponent counter={counter} increseCount={increseCount} />;
  };

  return NewComponent;
};

export default withCounter;
