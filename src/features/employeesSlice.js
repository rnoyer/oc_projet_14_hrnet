import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "employees",
  initialState: {
    value: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.value.push(action.payload);
      // state.value = [...state.value, action.payload];
    },
  },
});

export const { addEmployee } = formSlice.actions;

export default formSlice.reducer;
