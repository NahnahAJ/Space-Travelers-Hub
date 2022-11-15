import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSlice from './missions/missions';

const rootReducer = combineReducers(
  {
    mission: createSlice,
  },
);

const store = configureStore({
  reducer: rootReducer,
});

export default store;
