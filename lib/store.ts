import { configureStore } from "@reduxjs/toolkit";
import adminPageDataReducer from "./features/adminPageDataSlice";
import adminFormReducer from "./features/adminFormSlice";

export const store = configureStore({
  reducer: {
    adminPageData: adminPageDataReducer,
    adminForm: adminFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
