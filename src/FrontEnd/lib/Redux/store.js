import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./feature/searchReducer";


export function makeStore() {
  return configureStore({
    reducer: {
      dataSearch: searchReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== "production",
  });
}

const store = makeStore();

export default store;
