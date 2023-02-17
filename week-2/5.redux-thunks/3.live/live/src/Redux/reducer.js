import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  POST_TODOS_REQUEST,
  POST_TODOS_SUCCESS,
  POST_TODOS_FAILURE,
} from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
        todos: payload,
      };
    }

    case GET_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

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
        todos: [...state.todos, payload],
      };
    }

    case POST_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};

export default reducer;

/*
PUT - {id:4, title:'New title', status:true} - replacing
const newTodos = oldState.todos.map(el=>el.id === payload.id ? payload: el)
PATCH - {id:4, title: "Updated Title"} - Modify
const newTodos = oldState.todos.map(el=>el.id === payload.id ? {...el,payload} : el)
DELETE - {id:4}
*/
