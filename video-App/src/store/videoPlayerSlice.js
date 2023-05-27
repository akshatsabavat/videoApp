import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoDetails: {},
  creatorDetails: {},
};

const videoPlayerSlice = createSlice({
  name: "videoPlayer",
  initialState: initialState,
  reducers: {
    setVideoDetails: (state, action) => {
      state.videoDetails = action.payload;
    },
    setCreatorDetails: (state, action) => {
      state.creatorDetails = action.payload;
    },
  },
});

export const { setCreatorDetails, setVideoDetails } = videoPlayerSlice.actions;
export default videoPlayerSlice.reducer;
