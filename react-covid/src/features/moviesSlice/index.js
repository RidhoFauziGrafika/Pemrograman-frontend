import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const covidSlice = createSlice({
  name: "Covid Slice",
  initialState: {
    covid: data,
  },
  reducers: {
    updateCovid(state, action) {
      // mencari index dan provinsi yang ingin diupdate
      const index = state.covid.provinces.findIndex(
        (item) => item.kota === action.payload.province
      );

      const foundProvince = state.covid.provinces.find(
        (item) => item.kota === action.payload.province
      );

      // akses provinsi (array) yang ingin diupdate menggunakan index
      state.covid.provinces[index] = {
        // lakukan spread : copy provinsi yang sudah ditemukan sebelumnya
        ...foundProvince,
        // update property berdasarkan nilai dari status : teknik computed property
        [action.payload.status]:
          parseInt(foundProvince[action.payload.status]) +
          parseInt(action.payload.jumlah),
      };
    },
  },
});

const covidReducer = covidSlice.reducer;
const { updateCovid } = covidSlice.actions;
export default covidReducer;
export { updateCovid };
