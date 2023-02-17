import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  POST_TODOS_REQUEST,
  POST_TODOS_SUCCESS,
  POST_TODOS_ERROR,
} from "./actionTypes";

// Get Todos
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

export const getTodosError = () => {
  return {
    type: GET_TODOS_ERROR,
  };
};

// Post Todo
export const postTodoRequest = () => {
  return {
    type: POST_TODOS_REQUEST,
  };
};

export const postTodoSuccess = (payload) => {
  return {
    type: POST_TODOS_SUCCESS,
    payload,
  };
};

export const postTodoError = () => {
  return {
    type: POST_TODOS_ERROR,
  };
};
