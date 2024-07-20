import { configureStore } from '@reduxjs/toolkit';
import { swCharactersApi } from './sw-characters-api';

export const store = configureStore({
  reducer: {
    swCharactersApi: swCharactersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swCharactersApi.middleware),
});
