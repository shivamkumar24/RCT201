import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  POST_TODOS_REQUEST,
  POST_TODOS_SUCCESS,
  POST_TODOS_ERROR,
} from "./actionTypes";

const initialValue = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    // Get Todo App
    case GET_TODOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    }

    case GET_TODOS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // Post Todo App
    case POST_TODOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case POST_TODOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, action.payload],
      };
    }

    case POST_TODOS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
