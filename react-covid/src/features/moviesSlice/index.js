import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const covidSlice = createSlice({
  name: "Covid Slice",
  initialState: {
    covid: data,
  },
  reducers: {
    updateCovid() {},
  },
});
console.log(covidSlice);

const covidReducer = covidSlice.reducer;
const { updateCovid } = covidSlice.actions;
export default covidReducer;
export { updateCovid };
