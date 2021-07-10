import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";

import rootReducer from './root-reducer';

const middlewares = [logger]; // we take an array here because me might want to pass more middlewares later.

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;