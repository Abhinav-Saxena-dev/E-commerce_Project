import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import logger from "redux-logger";

import rootReducer from './root-reducer';

const middlewares = []; // we take an array here because me might want to pass more middlewares later.

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);