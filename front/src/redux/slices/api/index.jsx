import { createSlice } from '@reduxjs/toolkit'

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    summonerInfoData: {},
    opggSummonerWordCompletion: [],
    error: false
  },
  reducers: {
    apiCall: (state, action) => {
      if (action.payload.type === 'riotSummonerSearch') {
        // console.log('action', action.payload.summonerInfoData);
        return {...state, summonerInfoData: action.payload.summonerInfoData};
      } else if (action.payload.type === 'opggSummonerWordCompletion')  {
        // console.log('성공적: ', action.payload.data.data);
        return {...state, opggSummonerWordCompletion: action.payload.data.data, error: action.payload.error};
      }
    }
  }
});

export default apiSlice