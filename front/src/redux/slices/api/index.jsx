import { createSlice } from '@reduxjs/toolkit'

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    summonerInfoData: {},
    opggSummonerWordCompletion: [],
    error: false,
    summonerInfoRank: {}
  },
  reducers: {
    apiCall: (state, action) => {
      if (action.payload.type === 'riotSummonerSearch') {
        console.log('action', action.payload.summonerInfoData);
        return {...state, summonerInfoData: action.payload.summonerInfoData};
      } else if (action.payload.type === 'opggSummonerWordCompletion')  {
        // console.log('성공적: ', action.payload.data.data);
        return {...state, opggSummonerWordCompletion: action.payload.data.data, error: action.payload.error};
      } else if (action.payload.type === 'riotSummonerRankInfo') {
        console.log(action.payload.data);
        return {...state, summonerInfoRank: action.payload.data}
      }
    }
  }
});

export default apiSlice