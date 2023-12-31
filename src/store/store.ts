import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/reducer';

const store = configureStore({ reducer: appReducer });

export default store;
