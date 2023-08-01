import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./slices/todoSlice";

const store = configureStore({
  reducer: todoSliceReducer,
});

export default store;
