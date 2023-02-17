import React from "react";
import { useState } from "react";
import useCounter from "../custom/useCounter";

const Counter3 = () => {
  const [value, setValue] = useState(0);
  const [count, increment, decrement] = useCounter(0);
  return (
    <div>
      <h1>Counter3: {count}</h1>
      <div>
        <button onClick={() => decrement(count - 3)}>-3</button>

        <br />
        <button onClick={() => increment(count + -5)}>+(-5)</button>
      </div>
    </div>
  );
};

export default Counter3;
