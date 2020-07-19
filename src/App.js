import React, { useState, useReducer } from "react";
import "./styles/App.css";
import Counter from "./components/Counter";
import CounterUseEffect from "./components/CounterUseEffect";
import MouseEventUseEffect from "./components/MouseEventUseEffect";
import IntervalCounter from "./components/IntervalCounter";
import DataFetching from "./components/DataFetching";
import ContextHooks from "./components/ContextHooks";
import ReducerCounter from "./components/ReducerCounter";
import ReducerComplexCounter from "./components/ReducerComplexCounter";
import MultipleUseReducer from "./components/MultipleUseReducer";
import UseReducerUseContextExample from "./components/UseReducerUseContextExample";
import UseReducerUseContextAnother from "./components/UseReducerUseContextAnother";
import DataFetchingUsingReducer from "./components/DataFetchingUsingReducer";
import Comparsion from "./components/Comparsion";

export const UserContext = React.createContext();
export const TutorialContext = React.createContext();
export const CountContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, intitalState);
  const [selected, setSelected] = useState();

  const handleSelect = (e) => {
    setSelected(e.target.id);
  };

  return (
    <div>
      <button id="comparsion" onClick={handleSelect}>
        Comparsion - When to use:
      </button>
      {selected === "comparsion" && <Comparsion />}
      <br />
      <button id="useState" onClick={handleSelect}>
        useState example:
      </button>
      {selected === "useState" && <Counter />}
      <br />
      <button id="useEffect" onClick={handleSelect}>
        useEffect example:
      </button>
      {selected === "useEffect" && <CounterUseEffect />}
      {selected === "useEffect" && <MouseEventUseEffect />}
      {selected === "useEffect" && <IntervalCounter />}
      {selected === "useEffect" && <DataFetching />}
      <br />
      <button id="useContext" onClick={handleSelect}>
        useContext example:
      </button>
      <UserContext.Provider value={"Username: Anna"}>
        <TutorialContext.Provider value={"React Hooks tutorials"}>
          {selected === "useContext" && <ContextHooks />}
          <br />
        </TutorialContext.Provider>
      </UserContext.Provider>
      <button id="useReducer" onClick={handleSelect}>
        useReducer example:
      </button>
      {selected === "useReducer" && <ReducerCounter />}
      {selected === "useReducer" && <ReducerComplexCounter />}
      {selected === "useReducer" && <MultipleUseReducer />}
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        {selected === "useReducer" && <b>App.js - Count - {count}</b> }
        {selected === "useReducer" && <UseReducerUseContextExample />}
        {selected === "useReducer" && <UseReducerUseContextAnother />}
      </CountContext.Provider>
        {selected === "useReducer" && <DataFetchingUsingReducer />}
    </div>
  );
}
export default App;
