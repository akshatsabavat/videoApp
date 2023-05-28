import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscriptions: [],
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: initialState,
  reducers: {
    setSubsciption: (state, action) => {
      const payload = action.payload;
      if (!state.subscriptions.includes(payload)) {
        state.subscriptions.push(payload);
        state.isSubscribed = true;
      }
    },
    removeSubscription: (state, action) => {
      state.subscriptions = state.subscriptions.filter(
        (item) => item.id !== action.payload
      );
      state.isSubscribed(false);
    },
  },
});

export const { setSubsciption, removeSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
