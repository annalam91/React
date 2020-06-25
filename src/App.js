import React, {useState, useEffect}  from "react";
import "./styles/App.css";
import randomColor from 'randomcolor'

function App() {
  const [ count, setCount ] = useState(0)
  const [ color, setColor ] = useState("")

  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  useEffect(() => {
    setColor(randomColor())
  }, [count])

  return(
    <div>
      <h1 style={{color:color}}>{count}</h1>
      <button style={{fontSize: "24px"}} onClick={increment}>+</button>
      <button style={{fontSize: "24px"}} onClick={decrement}>-</button>
    </div>
  )
}
export default App;
