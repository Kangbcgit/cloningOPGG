import { createSlice } from '@reduxjs/toolkit'

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    summonerInfoData: ''
  },
  reducers: (state = this.initialState, action) => {
    switch(action.type) {
      case "API_CALL": 
        return ''
    }
  }
});

export default apiSlice