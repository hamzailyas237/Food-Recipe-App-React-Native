import { configureStore } from "@reduxjs/toolkit";
import FavouritiesSlice from "./FavouritiesSlice";

export const store = configureStore({
  reducer: {
    favourities: FavouritiesSlice,
  },
});
