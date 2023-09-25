  import { configureStore } from "@reduxjs/toolkit";
  import apiSlice from "../slices/api";
import currentInnerWidth from "../slices/currentInnerWidth";

  const rootReducer = {
    summonerInfoDataReducer: apiSlice.reducer,
    currentInnerWidth: currentInnerWidth.reducer,
  }

  const store = configureStore({
    reducer: rootReducer
  });

  export default store