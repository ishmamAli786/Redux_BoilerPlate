import bookReducer from './book/BookReducer';
import {createStore,applyMiddleware} from 'redux';
import {logger} from 'redux-logger';

export const store = createStore(bookReducer, applyMiddleware(logger))