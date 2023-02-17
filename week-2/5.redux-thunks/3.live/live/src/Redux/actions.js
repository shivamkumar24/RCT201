import axios from "axios";
import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  POST_TODOS_REQUEST,
  POST_TODOS_SUCCESS,
  POST_TODOS_FAILURE,
} from "./actionTypes";

export const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

export const getTodosSuccess = (payload) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload,
  };
};

export const getTodosFailure = () => {
  return {
    type: GET_TODOS_FAILURE,
  };
};

export const postTodosRequest = () => {
  return {
    type: POST_TODOS_REQUEST,
  };
};

export const postTodosSuccess = (payload) => {
  return {
    type: POST_TODOS_SUCCESS,
    payload,
  };
};

export const postTodosFailure = () => {
  return {
    type: POST_TODOS_FAILURE,
  };
};

export const getTodos = (dispatch) => {
  dispatch(getTodosRequest());
  axios
    .get(`http://localhost:8080/todos`)
    .then((res) => {
      dispatch(getTodosSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getTodosFailure());
    });
};
