import React, { useState } from "react";
import "./App.css";
import { handleAdd1, handleSub1 } from "./Redux/actions";
import { store } from "./Redux/store";

function App() {
  // const [count, setCount] = useState(0);
  const [forcedUpdate, setForcedUpdate] = useState(0);
  const { dispatch, getState, subscribe } = store;
  const { count } = getState();

  subscribe(() => {
    setForcedUpdate((prev) => prev + 1);
    console.log("State inside redux", store.getState());
  });

  const handleAdd = () => {
    // setCount((prev) => prev + 1);
    // dispatch(handleAdd1(2));
    dispatch({ type: "ADD", payload: 2 });
  };

  const handleSub = () => {
    // setCount((prev) => prev - 1);
    // dispatch(handleSub1(1));
    dispatch({ type: "SUB", payload: 1 });
  };

  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </div>
  );
}

export default App;
