import React, { useState } from "react";
import "./styles/App.css";
import Counter from "./components/Counter";
import CounterUseEffect from "./components/CounterUseEffect";
import MouseEventUseEffect from "./components/MouseEventUseEffect";
import IntervalCounter from "./components/IntervalCounter";
import DataFetching from "./components/DataFetching";
import ContextHooks from "./components/ContextHooks";

export const UserContext = React.createContext();
export const TutorialContext = React.createContext();

function App() {
  const [selected, setSelected] = useState();

  const handleSelect = (e) => {
    setSelected(e.target.id);
  };

  return (
    <div>
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
        useEffect example:
      </button>
      <UserContext.Provider value={"Username: Anna"}>
        <TutorialContext.Provider value={"React Hooks tutorials"}>
        {selected === "useContext" && <ContextHooks />}
        <br />
        </TutorialContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
export default App;
