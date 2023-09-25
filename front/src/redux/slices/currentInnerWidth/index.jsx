import { createSlice, current } from '@reduxjs/toolkit'

const currentInnerWidth = createSlice({
  name: 'currentInnerWidth',
  initialState: {
    currentInnerWidth: 0,
  },
  reducers: {
    setInnerWidth: (state, action) => {
      state.currentInnerWidth = action.payload.currentInnerWidth;
    }
  }
});

export default currentInnerWidth