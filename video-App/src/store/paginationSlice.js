import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    setPagination: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPagination } = paginationSlice.actions;
export default paginationSlice.reducer;
