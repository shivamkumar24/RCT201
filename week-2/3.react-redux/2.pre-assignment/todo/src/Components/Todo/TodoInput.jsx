import React from "react";
import { useState } from "react";

const TodoInput = ({ addTodos }) => {
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    if (todo.length) {
      addTodos(todo);
      setTodo("");
    }
  };

  return (
    <div>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
