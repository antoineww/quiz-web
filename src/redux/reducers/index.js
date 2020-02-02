import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import promise from "redux-promise";
import thunk from "redux-thunk";

import progress from "./progress";
import app from "./app";

const root = combineReducers({
  progress,
  app
});

const logger = createLogger(); // TODO: For debugging purposes

const composed = compose(
  applyMiddleware(
    promise,
    thunk,
    logger // TODO: For debugging purposes
  )
);

const store = createStore(root, composed);

export default store;
