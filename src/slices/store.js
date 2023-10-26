import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./searchSlice";
import routeSlice from "./routeSlice";
import filterSlice from "./filterSlice";
import stageSlice from "./stageSlice";
import seatsSlice from "./seatsSlice";
import passengersSlice from "./passengersSlice";
import paySlice from "./paySlice";
import orderSlice from "./orderSlice";

export default configureStore({
  reducer: {
    search: searchReducer,
    routes: routeSlice,
    filter: filterSlice,
    stage: stageSlice,
    seats: seatsSlice,
    passengers: passengersSlice,
    pay: paySlice,
    order: orderSlice,
  }
})