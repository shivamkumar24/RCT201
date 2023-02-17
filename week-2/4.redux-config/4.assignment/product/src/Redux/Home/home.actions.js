import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  POST_PRODUCT_REQUEST,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_ERROR,
} from "./home.actionTypes";

export const getProductRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};

export const getProductSuccess = (payload) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload,
  };
};

export const getProductError = () => {
  return {
    type: GET_PRODUCT_ERROR,
  };
};

export const postProductRequest = () => {
  return {
    type: POST_PRODUCT_REQUEST,
  };
};

export const postProductSuccess = (payload) => {
  return {
    type: POST_PRODUCT_SUCCESS,
    payload,
  };
};

export const postProductError = () => {
  return {
    type: POST_PRODUCT_ERROR,
  };
};
