import React, { useReducer } from "react";

const intitalState = {
  firstCounter: 0,
  secondCounter: 100,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "increment2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "reset":
      return intitalState;
    default:
      return currentState;
  }
};

function ReducerComplexCounter() {
  const [count, dispatch] = useReducer(reducer, intitalState);

  return (
    <div>
      <h3>useReducer example - Complex state & action </h3>
      <b>First Counter: {count.firstCounter}</b>
      <br />
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        -5
      </button>
      <br />
      <b>Second Counter: {count.secondCounter}</b>
      <br />
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement counter 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ReducerComplexCounter;
