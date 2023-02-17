import React from "react";
import useCounter from "../custom/useCounter";

const Counter2 = () => {
  const [count, increment, decrement] = useCounter(0);
  return (
    <div>
      <h1>Counter2: {count}</h1>
      <div>
        <button onClick={() => decrement(count - 3)}>-3</button>
        <button onClick={() => increment(count + 2)}>+2</button>
      </div>
    </div>
  );
};

export default Counter2;
