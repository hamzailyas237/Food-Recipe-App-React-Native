import { createSlice } from "@reduxjs/toolkit";

const favouritiesSlice = createSlice({
  name: "favourities",
  initialState: [],
  reducers: {
    add(state, action) {},
    remove(action, state) {},
  },
});
export const { add, remove } = favouritiesSlice.actions;
export default favouritiesSlice.reducer;
