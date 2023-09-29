import { createSlice } from "@reduxjs/toolkit";

export const headerStatus = createSlice({
  name: 'headerStatus',
  initialState: {
    isHeaderImgLoad: false
  },
  reducers: {
    isHeaderImgLoad: (state, action) => {
      state.isHeaderImgLoad = action.payload.boolean;
    }
  }
});