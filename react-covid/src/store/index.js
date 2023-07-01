import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../features/moviesSlice";

const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

export default store;
