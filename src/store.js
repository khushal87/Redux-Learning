import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { MathReducer } from './Reducers/mathReducer';
import { UserReducer } from './Reducers/userReducer';
import reduxThunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';

export default createStore(
    combineReducers(
        {
            MathReducer: MathReducer,
            UserReducer: UserReducer
        }),
    {},
    applyMiddleware(createLogger(), reduxThunk, createPromise())
);
