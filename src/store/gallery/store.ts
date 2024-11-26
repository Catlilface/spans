import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Dogs } from "./types";

import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { createSlice } from "@reduxjs/toolkit";

type ImageState = Array<string>;

export const dogsApi = createApi({
  reducerPath: "dogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/" }),
  endpoints: (builder) => ({
    getImages: builder.query<Dogs, string>({
      query: (name, limit = 20) => ({
        url: `breed/${name}/images/random/${limit}`,
        responseHandler: async (response) =>
          response.json().then((data) => data.message),
      }),
    }),
  }),
});

const initialState: ImageState = [];

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImages: (state, action: PayloadAction<string[]>) => {
      state.unshift(...action.payload);
    },
    deleteImage: (state, action: PayloadAction<string>) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
  selectors: {
    getAllImages: (state) => state,
    getImage: (state, action: PayloadAction<string>) => {
      return state.find((image) => image === action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    [dogsApi.reducerPath]: dogsApi.reducer,
    images: imageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const { useGetImagesQuery } = dogsApi;
export const { addImages, deleteImage } = imageSlice.actions;
export const { getAllImages, getImage } = imageSlice.selectors;
