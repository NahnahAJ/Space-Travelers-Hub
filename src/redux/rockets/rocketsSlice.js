import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'rockets/getRockets';

const initialState = {
  rockets: [],
  isLoading: true,
};

export const asyncGetRockets = createAsyncThunk(GET_ROCKETS, async () => {
  try {
    const response = await axios.get(URL);
    const rocketsFromAPI = [];
    response.data.forEach((data) => {
      const {
        id,
        rocket_name: rocketName,
        description,
        flickr_images: flickrImages,
      } = data;

      const newRocket = {
        id,
        rocketName,
        description,
        flickrImages,
        reserved: false,
      };
      rocketsFromAPI.push(newRocket);
    });
    return rocketsFromAPI;
  } catch (error) {
    return error;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      }),
    }),
    cancelRocketBooking: (state, action) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      }),
    }),
  },
  extraReducers: {
    [asyncGetRockets.fulfilled]: (state, action) => {
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

export const { bookRocket, cancelRocketBooking } = rocketsSlice.actions;

export default rocketsSlice.reducer;
