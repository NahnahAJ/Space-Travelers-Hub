import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';

const rootReducer = combineReducers({ rockets: rocketsSlice });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
