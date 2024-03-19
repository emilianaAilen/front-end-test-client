import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "commonSlice",
  initialState: { categories: [] },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = commonSlice.actions;

export default commonSlice.reducer;
