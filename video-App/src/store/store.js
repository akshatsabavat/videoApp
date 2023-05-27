import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import videoReducer from "./videoSlice";
import paginationReducer from "./paginationSlice";
import videoPlayerReducer from "./videoPlayerSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    video: videoReducer,
    pagination: paginationReducer,
    videoPlayer: videoPlayerReducer,
  },
});

export default store;
