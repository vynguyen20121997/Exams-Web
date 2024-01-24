import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDoingTest: false,
  error: null,
  fetchTestResources: {},
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    start: (state, { payload }) => {
      state.isDoingTest = true;
      state.fetchTestResources = payload;
    },
    end: (state) => {
      state.isDoingTest = false;
    },
  },
});

export const { start, end } = testSlice.actions;

export default testSlice.reducer;
