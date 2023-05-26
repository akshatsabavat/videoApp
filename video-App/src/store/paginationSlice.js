import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    setPaginationNext: (state) => {
      if (state.page < 2) {
        state.page = state.page + 1;
      }
    },
    setPaginationPrev: (state) => {
      if (state.page > 0) {
        state.page = state.page - 1;
      }
    },
  },
});

export const { setPaginationNext, setPaginationPrev } = paginationSlice.actions;
export default paginationSlice.reducer;
