import React, { useState, useEffect } from "react";

function IntervalCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tick = () => {
      setCount(count + 1);
    };

    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h3>UseEffect example with incorrect dependency </h3>
      {count}
    </div>
  );
}

export default IntervalCounter;
