import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Dogs } from "./types";

import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const dogsApi = createApi({
  reducerPath: "dogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/" }),
  endpoints: (builder) => ({
    getImages: builder.query<Dogs, string>({
      query: (name, limit = 20) => `breed/${name}/images/random/${limit}`,
    }),
  }),
});

export const store = configureStore({
  reducer: {
    [dogsApi.reducerPath]: dogsApi.reducer,
    uploadeImage: (state = [], action: PayloadAction<Dogs>): Array<string> => {
      if (action.payload?.message) {
        // @ts-expect-error no time to type everything correctly
        return [...action.payload.message, ...state];
      }
      if (action.payload?.deleteName) {
        // @ts-expect-error no time to type everything correctly
        return state.filter((image) => image !== action.payload.deleteName);
      }

      return state as Array<string>;
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const { useGetImagesQuery } = dogsApi;
