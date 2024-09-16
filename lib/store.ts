import { configureStore } from "@reduxjs/toolkit";
import adminPageDataReducer from "./features/adminPageDataSlice";

export const store = configureStore({
  reducer: {
    adminPageData: adminPageDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
