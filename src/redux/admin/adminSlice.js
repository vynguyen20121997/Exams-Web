import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDelete: false,
  isEdit: false,
  isCreate: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    isDelete: (state) => {
      state.isDelete = !state.isDelete;
    },
    isEdit: (state) => {
      state.isEdit = !state.isEdit;
    },
    isCreate: (state) => {
      state.isCreate = !state.isCreate;
    },
  },
});

export const { isDelete, isEdit, isCreate } = adminSlice.actions;

export default adminSlice.reducer;
