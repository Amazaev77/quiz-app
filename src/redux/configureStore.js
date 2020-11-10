import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import tests from './features/tests';
import questions from './features/questions';
import answers from './features/answers';
import { save, load } from "redux-localstorage-simple";

const rootReducer = combineReducers({
  tests,
  questions,
  answers
});

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = createStore(
  rootReducer,
  load({storeApp: "store-app"}),
  applyMiddleware(thunk, logger,save({storeApp: "store-app"})),
);

