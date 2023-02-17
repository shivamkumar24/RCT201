import {
  LOGIN_REQUEST,
  LOGIN_SECCESS,
  LOGIN_FAILURE,
} from "./auth.actionTypes";

export const getLoginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const getLoginSuccess = (payload) => {
  return {
    type: LOGIN_SECCESS,
    payload,
  };
};

export const getLoginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};
