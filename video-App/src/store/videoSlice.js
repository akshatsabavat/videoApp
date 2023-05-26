import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialVideosState = {
  data: [],
  page: 0,
  status: STATUSES.IDLE,
};

const videoSlice = createSlice({
  name: "video",
  initialState: initialVideosState,
  reducers: {
    setVideos: (state, action) => {
      state.data = action.payload;
    },
    setState: (state, action) => {
      state.status = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setVideos, setState } = videoSlice.actions;
export default videoSlice.reducer;

// THUNK function
export const fetchVideoAPI = (page) => {
  return async function fetchVideosThunk(dispatch) {
    dispatch(setState(STATUSES.LOADING));
    try {
      const reponse = await fetch(
        `https://internship-service.onrender.com/videos?page=${page}`
      );
      const data = await reponse.json();
      dispatch(setVideos(data.data.posts));
      dispatch(setState(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setState(STATUSES.ERROR));
    }
  };
};
