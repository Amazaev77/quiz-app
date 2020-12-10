import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import tests from "./features/tests";
import questions from "./features/questions";
import answers from "./features/answers";
import results from "./features/results";
import authorization from "./features/authorization";
import adminPanel from "./features/adminPanel";

const rootReducer = combineReducers({
  tests,
  questions,
  answers,
  results,
  authorization,
  adminPanel,
});

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
