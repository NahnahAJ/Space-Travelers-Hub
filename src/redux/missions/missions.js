import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'spaceTravelersHub/missions/GET_MISSIONS';
const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  GET_MISSIONS,
  async () => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  isLoading: true,
  missions: [],
};

const createApiSlice = createSlice(
  {
    name: 'missions',
    initialState,
    reducers: [],
    extraReducers: {
      [fetchMissions.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.missions = action.payload;
      },
      [fetchMissions.pending]: (state) => {
        state.isLoading = true;
      },
      [fetchMissions.rejected]: (state) => {
        state.isLoading = false;
      },
    },
  },
);

export default createApiSlice.reducer;
