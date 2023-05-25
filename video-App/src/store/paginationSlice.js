import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    setPaginationNext: (state) => {
      state.page < 3 ? (state.page = state.page + 1) : (state.page = 0);
    },
    setPaginationPrev: (state) => {
      state.page > 0 ? (state.page = state.page - 1) : (state.page = 3);
    },
  },
});

export const { setPaginationNext, setPaginationPrev } = paginationSlice.actions;
export default paginationSlice.reducer;
