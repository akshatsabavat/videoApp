import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import searchReducer from "./searchSlice";
import videoReducer from "./videoSlice";
import paginationReducer from "./paginationSlice";
import videoPlayerReducer from "./videoPlayerSlice";
import subscriptionReducer from "./subscriptionSlice";

const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: ["subscription"],
};

const rootReducer = combineReducers({
  search: searchReducer,
  video: videoReducer,
  pagination: paginationReducer,
  videoPlayer: videoPlayerReducer,
  subscription: subscriptionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor };
