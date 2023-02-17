import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h1 data-testid="countVal">Counter: {count} </h1>
      <button data-testid="addBtn" onClick={() => setCount(count + 1)}>
        ADD
      </button>
      <button data-testid="reduceBtn" onClick={() => setCount(count - 1)}>
        SUB
      </button>
    </div>
  );
};

export default Counter;
