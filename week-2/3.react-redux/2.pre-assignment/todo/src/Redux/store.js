import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { reducer as CounterReducer } from "./Counter/reducer";
import { reducer as TodoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({ CounterReducer, TodoReducer });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store => redux store
// next => dispatch function
// action => action object
const logger1 = (store) => (next) => (action) => {
  // analysing and capturing user events/tracking
  return next(action); // dispatch(action) => go to the next middlewire if available, else go to the reducer function
};

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(logger1))
);

// Notes: Line 10 explaination
// javascript Curring
// function logger1(store){
//     return function(next){
//         return function(action){
//             return next(action);
//         }
//     }
// }

//  Redux => Store global data
//  Store Enhancers => browser plugins / extrensions
//  eg:- applymiddlewire is store enhancer, redux dev-tools is an enhancer
//  compose
//  <Provider></Provider>, useSelector, useDispatch -> react-redux
