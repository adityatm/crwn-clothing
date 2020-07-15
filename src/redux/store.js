import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const Middlewarea = [logger];

const store = createStore(rootReducer, applyMiddleware(...Middlewarea));

export default store;