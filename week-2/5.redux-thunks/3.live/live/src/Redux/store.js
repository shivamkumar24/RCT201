import { applyMiddleware, legacy_createStore } from "redux";
import reducer from "./reducer";

const customMddleWire = (store) => (next) => (action) => {
  //   console.log(action);
  // next => dispatch
  // action => getTodos
  if (typeof action === "function") {
    // getTodos(dispatch)
    return action(store.dispatch);
  }
  return next(action); // dispatch(actionObject)
};

export const store = legacy_createStore(
  reducer,
  applyMiddleware(customMddleWire)
);
