import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import videoReducer from "./videoSlice";
import paginationReducer from "./paginationSlice";
import videoPlayerReducer from "./videoPlayerSlice";
import subscriptionReducer from "./subscriptionSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    video: videoReducer,
    pagination: paginationReducer,
    videoPlayer: videoPlayerReducer,
    subscription: subscriptionReducer,
  },
});

export default store;
