import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  postTodosFailure,
  postTodosRequest,
  postTodosSuccess,
} from "../Redux/actions";

const TodoInput = (getTodos) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const addTodo = () => {
    if (title.length) {
      const payload = {
        title,
        status: false,
      };
      dispatch(postTodosRequest());
      return axios
        .post(`http://localhost:8080/todos`, payload)
        .then((res) => {
          // dispatch(postTodosSuccess(res.data));
        })
        .catch((err) => {
          dispatch(postTodosFailure());
        });
    }
  };

  const handleAdd = () => {
    addTodo().then(() => {
      setTitle("");
      dispatch(getTodos);
    });
  };

  return (
    <div>
      <input value={title} onChange={changeHandler} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
