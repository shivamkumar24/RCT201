import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import HomeReducer from "./Home/home.reducer";
import CartReducer from "./Cart/cart.reducer";
import LoginReducer from "./Auth/auth.reducer";

const rootReducer = combineReducers({
  HomeReducer,
  CartReducer,
  LoginReducer,
});

const logger1 = (store) => (next) => (action) => {
  // console.log("Store", store);
  // console.log("Next:", next);
  // console.log("action:", action);
  return next(action);
};

const composeEnhncer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhncer(applyMiddleware(logger1))
);
