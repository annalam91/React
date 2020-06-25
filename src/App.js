import React, {useState}  from "react";
import "./styles/App.css";

function App() {
  const [ value ] = useState("Yes")
  console.log(value)

  return(
    <div>
      <h3>Does this useState work? {value}</h3>
    </div>
  )
}
export default App;
