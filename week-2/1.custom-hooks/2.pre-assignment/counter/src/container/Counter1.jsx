import React from "react";
import useCounter from "../custom/useCounter";

const Counter1 = () => {
  const [count, increment, decrement] = useCounter(0);
  return (
    <div>
      <h1>Counter1: {count}</h1>
      <div>
        <button onClick={() => decrement(count - 1)}>-1</button>
        <button onClick={() => increment(count + 1)}>+1</button>
      </div>
    </div>
  );
};

export default Counter1;
