import React, { useContext } from "react";
import { CountContext } from "../App";

function UseReducerUseContextAnother() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <p>
        useReducer, useContext example Maintaining the state in App.js Share the
        state with two different component. UseReducerUseContextExample
        component and UseReducerUseContextAnother component.
      </p>
      <b>UseReducerUseContextAnother </b>{countContext.countState}
      <br />
      <button onClick={() => countContext.countDispatch("increment")}>
        +
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        -
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReducerUseContextAnother;
