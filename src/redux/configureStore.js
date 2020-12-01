import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";
import tests from "./features/tests";
import questions from "./features/questions";
import answers from "./features/answers";
import results from "./features/results";
import authorization from "./features/authorization";
import addTest from "./features/addTest";

const rootReducer = combineReducers({
  tests,
  questions,
  answers,
  results,
  authorization,
  addTest
});

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
