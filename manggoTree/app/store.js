import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger';

import rootReducers from './reducers'

const middleware = applyMiddleware(logger)
const store = createStore(rootReducers,middleware)

export default store;
