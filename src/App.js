import React, { useState } from "react";
import "./styles/App.css";
import Counter from "./components/Counter";

function App() {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <button onClick={() => setHidden(!hidden)}>useState example:</button>
      {!hidden ? <Counter /> : null}
    </div>
  );
}
export default App;
