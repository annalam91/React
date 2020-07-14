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

function MultipleUseReducer() {
  const [count, dispatch] = useReducer(reducer, intitalState);
  const [countTwo, dispatchTwo] = useReducer(reducer, intitalState);

  return (
    <div>
      <h3>useReducer example - Multple </h3>
      <b>Count - {count}</b>
      <br />
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <br />
      <b>Count - {countTwo}</b>
      <br />
      <button onClick={() => dispatchTwo("increment")}>Increment</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
}

export default MultipleUseReducer;
