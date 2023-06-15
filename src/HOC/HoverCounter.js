import withCounter from "./withCounter";

const HoverCounter = ({ counter, increseCount }) => {
  return (
    <div>
      <h1 onMouseOver={increseCount}>
        Hover {counter} times.
      </h1>
    </div>
  );
};

export default withCounter(HoverCounter);
