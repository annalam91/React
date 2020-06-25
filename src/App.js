import React, {useState}  from "react";
import "./styles/App.css";

function App() {
  const [ count, setCount ] = useState(0)
  console.log(count)

  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  function decrement() {
    setCount(prevCount => prevCount - 1);
  }


  return(
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
export default App;
