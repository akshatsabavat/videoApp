import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import videoReducer from "./videoSlice";
import paginationReducer from "./paginationSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    video: videoReducer,
    pagination: paginationReducer,
  },
});

export default store;
