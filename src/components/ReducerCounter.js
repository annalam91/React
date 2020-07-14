import React, { useReducer } from "react";

const intitalState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return intitalState;
    default:
      return currentState;
  }
};

function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, intitalState);

  return (
    <div>
        <h3>useReducer example - simple state & action </h3>
      <b>Count - {count}</b>
      <br />
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default ReducerCounter;
