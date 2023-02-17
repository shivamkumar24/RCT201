import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../Redux/Counter/actions";

const Counter = () => {
  const count = useSelector((store) => store.CounterReducer.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(decrement(2))}>-</button>
        <button onClick={() => dispatch(increment(3))}>+</button>
      </div>
    </div>
  );
};

export default Counter;
