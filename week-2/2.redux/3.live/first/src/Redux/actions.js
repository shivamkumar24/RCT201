import { ADD, SUB } from "./actionTypes";

export const handleAdd1 = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const handleSub1 = (payload) => {
  return {
    type: SUB,
    payload,
  };
};
