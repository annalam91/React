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

    return (
      <div>
        <h3>useState example</h3>
        <button onClick={() => setCount(count + 1)}>Count: <b>{count}</b></button>
      </div>
    )
  }

export default Counter;

