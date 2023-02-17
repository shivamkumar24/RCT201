import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import TodoInput from "./TodoInput";
import {
  getTodos,
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
} from "../Redux/actions";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  // const getTodos = () => {
  //   dispatch(getTodosRequest());
  //   axios
  //     .get(`http://localhost:8080/todos`)
  //     .then((res) => {
  //       dispatch(getTodosSuccess(res.data));
  //     })
  //     .catch((err) => {
  //       dispatch(getTodosFailure());
  //     });
  // };

  useEffect(() => {
    dispatch(getTodos);
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <TodoInput getTodos={getTodos} />
      {todos.length &&
        todos.map((el) => {
          return (
            <div key={el.id}>
              {el.title} ----- {el.status ? "True" : "False"}
            </div>
          );
        })}
    </div>
  );
};

export default Todos;
