import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/rootReducer.ts';

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const setupStore = () => store;
