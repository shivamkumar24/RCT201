import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
} from "./cart.actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }

    case GET_CART_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
