import { createSlice } from '@reduxjs/toolkit'

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    summonerInfoData: {}
  },
  reducers: {
    apiCall: (state, action) => {
      console.log('action', action.payload.summonerInfoData);
      return {...state, summonerInfoData: action.payload.summonerInfoData};
    }
  }
});

export default apiSlice