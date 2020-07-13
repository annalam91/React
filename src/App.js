import React, { useState } from "react";
import "./styles/App.css";
import Counter from "./components/Counter";
import CounterUseEffect from "./components/CounterUseEffect";
import MouseEventUseEffect from "./components/MouseEventUseEffect";
import IntervalCounter from "./components/IntervalCounter";
import DataFetching from "./components/DataFetching";

function App() {
  const [selected, setSelected] = useState();

  function handleSelect(e){
    setSelected(e.target.id);
  }

  return (
    <div>
      <div>
        <button id="1" onClick={handleSelect}>useState example:</button>
        {selected === "1" && <Counter />}
        <br />
      </div>
      <div>
        <button id="2" onClick={handleSelect}>useEffect example:</button>
        {selected === "2" && <CounterUseEffect />} <br />
        {selected === "2" && <MouseEventUseEffect />}<br />
        {selected === "2" && <IntervalCounter />}<br />
        {selected === "2" && <DataFetching />}<br />
      </div>
    </div>
  );
}
export default App;
