import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import booleanReducer from "../features/boolean/booleanSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    boolean: booleanReducer,
  },
});
