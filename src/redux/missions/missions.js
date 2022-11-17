import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'spaceTravelersHub/missions/GET_MISSIONS';
const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  isLoading: true,
  missions: [],
};

export const fetchMissions = createAsyncThunk(
  GET_MISSIONS,
  async () => {
    try {
      const response = await axios.get(URL);

      const data = [];

      response.data.forEach((obj) => {
        const {
          mission_id: missionId, mission_name: missionName, description,
        } = obj;

        const formatedData = {
          missionId,
          missionName,
          description,
          reserved: false,
        };

        data.push(formatedData);
      });

      return data;
    } catch (error) {
      return error;
    }
  },
);

const createApiSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMissions: (state, action) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.missionId === action.payload) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return { ...mission };
      }),
    }),
    leaveMission: (state, action) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.missionId === action.payload) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return { ...mission };
      }),
    }),
  },
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
});

export const { joinMissions, leaveMission } = createApiSlice.actions;
export default createApiSlice.reducer;
