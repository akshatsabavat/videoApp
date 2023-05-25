import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import videoReducer from "./videoSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    video: videoReducer,
  },
});

export default store;
