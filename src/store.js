import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import { logger } from 'redux-logger/src';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(logger)));

export default store;
