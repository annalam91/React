/*
Step 1: Create a component
Step 2: State propety to initiallise to 0 (or whatever you want)
Step 3: Method capable of setting that state propety value.

----------------------------------------------------------------------------

Rule 1: Only call hooks at top level
Rule 2: Don't call hook inside loops, conditions, or nested functions
Rule 3: Only call hooks from react function.
Rule 4: Call hooks within React functional component not any JS function.

*/

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const secondCount = 0;
  const [secondExampleCount, setSecondExampleCount] = useState(secondCount);
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [item, setItem] = useState([]);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setSecondExampleCount((prevCount) => prevCount + 1);
    }
  };

  const addItem = () => {
    setItem([
      ...item,
      { id: item.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };

  return (
    <div>
      <h3>useState example</h3>
      <button onClick={() => setCount(count + 1)}>
        Count: <b>{count}</b>
      </button>

      <h3>useState example two </h3>
      <button onClick={() => setSecondExampleCount(secondExampleCount + 1)}>
        Increment
      </button>
      <button onClick={() => setSecondExampleCount(secondExampleCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Incrment by 5 </button>
      <button onClick={() => setSecondExampleCount(secondCount)}>Reset</button>
      <br />
      <b>Count: {secondExampleCount}</b>

      <h3>useState example using Objects</h3>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h3>First name: {name.firstName}</h3>
        <h3>Last name: {name.lastName}</h3>
      </form>
      <h3>useState example using Objects</h3>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {item.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
