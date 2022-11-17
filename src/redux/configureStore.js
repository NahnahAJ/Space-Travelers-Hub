import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSlice from './missions/missions';
import rocketsSlice from './rockets/rocketsSlice';

const rootReducer = combineReducers({
  rockets: rocketsSlice,
  mission: createSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
