import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscriptions: [],
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: initialState,
  reducers: {
    setSubsciption: (state, action) => {
      state.subscriptions.push(action.payload);
    },
  },
});

export const { setSubsciption } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
