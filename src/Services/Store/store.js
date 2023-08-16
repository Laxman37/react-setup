import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/AuthSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    AuthUser: authSliceReducer,
  },
  middleware: customizedMiddleware,
});

export default store;