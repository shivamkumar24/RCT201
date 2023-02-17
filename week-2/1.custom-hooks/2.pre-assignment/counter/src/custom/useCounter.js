import React, { useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(0);

  const increment = (value) => {
    setCount(value);
  };

  const decrement = (value) => {
    setCount(value);
  };

  return [count, increment, decrement];
};

export default useCounter;
