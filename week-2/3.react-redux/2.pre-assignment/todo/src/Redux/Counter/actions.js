import { INC, DEC } from "./actionTypes";

export const increment = (payload = 1) => {
  return {
    type: INC,
    payload,
  };
};

export const decrement = (payload = 1) => {
  return {
    type: DEC,
    payload,
  };
};
