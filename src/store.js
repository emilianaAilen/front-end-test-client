import commonReducer from "features/common/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
});
