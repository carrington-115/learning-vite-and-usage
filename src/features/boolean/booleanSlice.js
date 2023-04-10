import { createSlice } from "@reduxjs/toolkit";

export const booleanSlice = createSlice({
  name: "boolean",
  initialState: {
    value: true,
    email: "",
  },
  reducers: {
    setActive: (state) => {
      state.value = true;
    },
    setInActive: (state) => {
      state.value = false;
    },
    showTextEmail: (state, action) => {
      state.email += action.payload;
    },
  },
});

export const selectInputState = (state) => state.boolean.email;
export const selectBooleanState = (state) => state.boolean.value;
export const { setActive, setInActive, showTextEmail } = booleanSlice.actions;
export default booleanSlice.reducer;
