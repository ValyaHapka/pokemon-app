import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import filterReducer from './slices/filterSlice';

const store = createStore(filterReducer, applyMiddleware(thunk));

export default store;
