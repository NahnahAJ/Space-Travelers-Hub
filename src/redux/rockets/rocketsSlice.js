import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  isLoading: true,
};

export const asyncGetRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rocketsReducer',
  initialState,
  reducers: [],
  extraReducers: {
    [asyncGetRockets.fulfilled]: (state, action) => {
      // console.log(action.payload);
      // console.log('working');
      state.rockets = action.payload;
      state.isLoading = false;
    },
    [asyncGetRockets.rejected]: (state) => {
      state.isLoading = false;
    },
    [asyncGetRockets.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default rocketsSlice.reducer;
