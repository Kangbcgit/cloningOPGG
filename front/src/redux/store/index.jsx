import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../slices/api";

const rootReducer = {
  summonerInfoDataReducer: apiSlice,
}

const store = configureStore(rootReducer);

export default store