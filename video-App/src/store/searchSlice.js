import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    search: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;
