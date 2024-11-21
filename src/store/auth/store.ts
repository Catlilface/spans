import { configureStore, createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  initialState: {
    isAuthentificated: localStorage.getItem("isAuthentificated") === "true",
  },
  name: "auth",
  reducers: {
    setIsAuthentificated: (state, action) => {
      state.isAuthentificated = action.payload;

      localStorage.setItem("isAuthentificated", action.payload.toString());
    },
  },
});
export const authStore = configureStore({
  reducer: authSlice.reducer,
});

export const { setIsAuthentificated } = authSlice.actions;
export default authSlice.reducer;

export type AuthRootState = ReturnType<typeof authStore.getState>;
