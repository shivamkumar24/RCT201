import {
  LOGIN_REQUEST,
  LOGIN_SECCESS,
  LOGIN_FAILURE,
} from "./auth.actionTypes";

const initialState = {
  token: "",
  isLoading: false,
  isError: false,
};

const LoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case LOGIN_SECCESS: {
      return {
        ...state,
        isLoading: false,
        token: payload,
      };
    }

    case LOGIN_FAILURE: {
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

export default LoginReducer;
