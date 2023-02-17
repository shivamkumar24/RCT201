import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import {
  getTodosError,
  getTodosRequest,
  getTodosSuccess,
  postTodoError,
  postTodoRequest,
  postTodoSuccess,
} from "../../Redux/Todo/actions";

const Todo = () => {
  const todos = useSelector((state) => state.TodoReducer.todos);
  const loading = useSelector((store) => store.TodoReducer.isLoading);
  // console.log(todos);
  const dispatch = useDispatch();

  const getTodos = () => {
    // Request
    dispatch(getTodosRequest());

    axios
      .get(`http://localhost:8080/todos`)
      .then((res) => {
        // Success
        dispatch(getTodosSuccess(res.data));
      })
      .catch((err) => {
        // Failure
        dispatch(getTodosError());
      });
  };

  const addTodos = (title) => {
    if (title) {
      const payload = {
        title,
        status: "false",
      };
      dispatch(postTodoRequest());
      axios
        .post(`http://localhost:8080/todos`, payload)
        .then((res) => {
          dispatch(postTodoSuccess(res.data));
        })
        .catch((err) => {
          dispatch(postTodoError());
        });
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput addTodos={addTodos} />
      {loading && <h3>Loading......</h3>}
      {todos.length &&
        todos.map((el) => {
          return (
            <p>
              {el.id} ---- {el.title} ---- {el.status}{" "}
            </p>
          );
        })}
    </div>
  );
};

export default Todo;
