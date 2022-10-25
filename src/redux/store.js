import { createStore } from 'redux';
import filterReducer from './slices/filterSlice';

const store = createStore(filterReducer);

export default store;
