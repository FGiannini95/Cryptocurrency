import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from '../services/cryptoApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  //to avoid bug
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
