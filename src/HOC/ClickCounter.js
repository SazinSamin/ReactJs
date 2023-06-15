import withCounter from "./withCounter";

const ClickCounter = ({ counter, increseCount }) => {
  return (
    <div>
      <button type="submit" onClick={increseCount}>
        Click {counter} times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
