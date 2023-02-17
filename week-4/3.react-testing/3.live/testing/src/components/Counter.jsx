import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(8);
  return (
    <div>
      <h1>Counter</h1>
      <h3 data-testid="count-tag">Count is {count}</h3>
      <button data-testid="addBtn" onClick={() => setCount((prev) => prev + 1)}>
        Add
      </button>
      <button
        data-testid="reduceBtn"
        disabled={count === 0}
        onClick={() => setCount((prev) => prev - 1)}
      >
        Reduce
      </button>
    </div>
  );
};

export default Counter;
