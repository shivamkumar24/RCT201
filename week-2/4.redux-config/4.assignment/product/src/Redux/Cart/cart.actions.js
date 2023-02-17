import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
} from "./cart.actionTypes";

export const getCartRequest = () => {
  return {
    type: GET_CART_REQUEST,
  };
};

export const getCartSuccess = (payload) => {
  return {
    type: GET_CART_SUCCESS,
    payload,
  };
};

export const getCartError = () => {
  return {
    type: GET_CART_ERROR,
  };
};
