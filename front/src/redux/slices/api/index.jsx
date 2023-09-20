import { createSlice } from '@reduxjs/toolkit'

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    summonerName: ''
  }
});

export default apiSlice