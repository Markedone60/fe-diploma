import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./searchSlice";
import routeSlice from "./routeSlice";

export default configureStore({
  reducer: {
    search: searchReducer,
    routes: routeSlice,
  }
})