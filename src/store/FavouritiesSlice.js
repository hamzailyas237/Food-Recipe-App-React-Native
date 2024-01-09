import { createSlice } from "@reduxjs/toolkit";

const favouritiesSlice = createSlice({
  name: "favourities",
  initialState: {
    data: []
  },
  reducers: {
    add(state, action) {
      const existingItem = state?.data?.find(item => item.idMeal === action.payload.idMeal);
      if (!existingItem) {
        state?.data?.push(action.payload);
      } else {
        const updatedFavorites = state?.data?.map(item => (item.idMeal === action.payload.idMeal ? action.payload : item));
        state.data = updatedFavorites;
      }
    },

    remove(state, action) {
      const remainingFavourities = state?.data?.filter(item => {
        return item.idMeal !== action.payload
      })
      state.data = remainingFavourities
    },
  },
});
export const { add, remove } = favouritiesSlice.actions;
export default favouritiesSlice.reducer;
