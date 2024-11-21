import { configureStore, createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  initialState: {
    isAuthentificated: localStorage.getItem("isAuthentificated") === "true",
    user: {
      name: "",
      email: "",
    },
  },
  name: "auth",
  reducers: {
    setIsAuthentificated: (state, action) => {
      state.isAuthentificated = action.payload;
      state.user = {
        name: "",
        email: "",
      };

      localStorage.setItem("isAuthentificated", action.payload.toString());
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const authStore = configureStore({
  reducer: authSlice.reducer,
});

export const { setIsAuthentificated } = authSlice.actions;
export default authSlice.reducer;

export type AuthRootState = ReturnType<typeof authStore.getState>;
