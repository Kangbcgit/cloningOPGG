  import { configureStore } from "@reduxjs/toolkit";
  import apiSlice from "../slices/api";

  const rootReducer = {
    summonerInfoDataReducer: apiSlice.reducer,
  }

  const store = configureStore({
    reducer: rootReducer
  });

  export default store