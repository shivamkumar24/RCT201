import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  POST_PRODUCT_REQUEST,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_ERROR,
} from "./home.actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

const HomeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // GET
    case GET_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }

    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // POST
    case POST_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case POST_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: [...state.products, payload],
      };
    }

    case POST_PRODUCT_ERROR: {
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

export default HomeReducer;
