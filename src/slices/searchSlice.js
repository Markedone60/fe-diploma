import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date_start: null,
  date_end: null,
  routeFrom: "Москва",
  routeIn: "Санкт-Петербург"
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchChange: (state, action) => {
      const {name, value} = action.payload;
      state[name] = value;
    },
    cityRotate: (state) => {
      const from = state.routeFrom;
      state.routeFrom = state.routeIn;
      state.routeIn = from;
    }
  }
})

export const {searchChange, cityRotate} = searchSlice.actions;
export default searchSlice.reducer;